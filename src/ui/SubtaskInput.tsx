import { HiXMark } from "react-icons/hi2";
import FormRow from "./FormRow";
import Input from "./Input";

type Placeholder = {
  placeholder: string;
  onDelete: (index: number) => void;
  inputId: number;
};

function SubtaskInput({ placeholder, onDelete, inputId }: Placeholder) {
  return (
    <FormRow>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 3rem",
          gap: "2rem",
        }}
      >
        <Input placeholder={placeholder} />
        <HiXMark
          style={{ fontSize: "3rem", fontWeight: "700", cursor: "pointer" }}
          onClick={() => onDelete(inputId)}
        />
        {/* <img src="" alt="" /> */}
      </div>
    </FormRow>
  );
}

export default SubtaskInput;
