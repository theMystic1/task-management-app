import { supabase } from "../supabase/supabase";

export async function getTasksApi() {
  const { data: boards, error } = await supabase.from("boards").select("*");

  if (error) {
    console.error(error);
    throw new Error("Unable to fetch tasks");
  }

  return boards;
}
