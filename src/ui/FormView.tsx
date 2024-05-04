import FormRow from "./FormRow";
import Input from "./Input";
import SubtaskInput from "./SubtaskInput";
import { Header, Option, P, Select, StyledTaskView } from "./TasksView";
import Textarea from "./TextArea";
import Button from "./Button";
import { useState } from "react";

type FormViewProps = {
  type: string;
};

function FormView({ type }: FormViewProps) {
  const [columnInputs, setColumnInputs] = useState<string[]>(["subtasks-0"]);
  const [nextColumnInputId, setNextColumnInputId] = useState(1);

  const handleAddColumns = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const newColumnInputs = [...columnInputs, `subtasks-${nextColumnInputId}`];
    setColumnInputs(newColumnInputs);
    setNextColumnInputId(nextColumnInputId + 1);
  };

  const handleDeleteColumn = (index: number) => {
    const updatedColumns = [...columnInputs];
    updatedColumns.splice(index, 1);
    setColumnInputs(updatedColumns);
  };

  const headerMsg =
    type === "edit" ? "Edit Task" : type === "add" ? "Add New Task" : "";
  return (
    <StyledTaskView as="form">
      <Header>{headerMsg}</Header>
      <FormRow label="Title" error="">
        <Input type="text" id="title" placeholder="e.g take a coffe break" />
      </FormRow>

      <FormRow label="Description" error="">
        <Textarea
          id="description"
          placeholder="e.g it is always good to take a break"
        />
      </FormRow>

      <div className="w-full">
        <P as="h2">Subtasks</P>
        {columnInputs.map((inputId, i) => (
          <SubtaskInput
            key={inputId}
            placeholder={`e.g Subtasks ${inputId}`}
            onDelete={handleDeleteColumn}
            inputId={i}
          />
        ))}
        <Button
          btnType="secondary"
          className="w-full"
          style={{ width: "100%" }}
          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
            handleAddColumns(e)
          }
        >
          +Add New Columns
        </Button>
      </div>

      <Select>
        <Option value={"Todo"}>Todo</Option>{" "}
        <Option value={"Doing"}>Doing</Option>
        <Option value={"Done"}>Done</Option>
      </Select>

      <Button>Create Task</Button>
    </StyledTaskView>
  );
}

export default FormView;
