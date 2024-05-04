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
      <div className="grid grid-cols-[1fr,3rem] gap-4 items-center">
        <Input placeholder={placeholder} />
        <HiXMark
          className="text-[3rem] font-bold cursor-pointer"
          onClick={() => onDelete(inputId)}
        />
        {/* <img src="" alt="" /> */}
      </div>
    </FormRow>
  );
}

export default SubtaskInput;
