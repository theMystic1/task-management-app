import { supabase } from "../supabase/supabase"; // Import your Supabase client

interface NestedObject {
  [key: string]: NestedObject | unknown;
}

export function flattenJSON(data: NestedObject): object[] {
  const flattenedData: object[] = [];

  const flatten = (data: NestedObject, parentKey?: string) => {
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        const newKey = parentKey ? `${parentKey}_${key}` : key;
        if (typeof data[key] === "object" && !Array.isArray(data[key])) {
          flatten(data[key] as NestedObject, newKey);
        } else {
          flattenedData.push({ [newKey]: data[key] });
        }
      }
    }
  };

  flatten(data);
  return flattenedData;
}

// Function to insert data into Supabase table
export const insertData = async (tableName: string, data: object[]) => {
  try {
    const { data: insertedData, error } = await supabase
      .from(tableName)
      .insert(data);

    if (error) {
      console.error("Error inserting data:", error.message);
      return null;
    }

    console.log("Data inserted successfully:", insertedData);
    return insertedData;
  } catch (error) {
    console.error("Error inserting data:", error);
    return null;
  }
};
