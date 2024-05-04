import React, { useState } from "react";
import FormRow from "./FormRow";
import Input from "./Input";
import SubtaskInput from "./SubtaskInput";
import { Header, P, StyledTaskView } from "./TasksView";
import Button from "./Button";

type Props = {
  type: string;
};

function NewBoard({ type }: Props) {
  const [columnInputs, setColumnInputs] = useState<string[]>(["columns-0"]);
  const [nextColumnInputId, setNextColumnInputId] = useState(1);

  const headerMsg =
    type === "edit" ? "Edit Board" : type === "add" ? "Add New Board" : "";

  // type Event<T = HTMLElement> = {
  //   e: React.MouseEvent<T>;
  // };

  const handleAddColumns = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const newColumnInputs = [...columnInputs, `column-${nextColumnInputId}`];
    setColumnInputs(newColumnInputs);
    setNextColumnInputId(nextColumnInputId + 1);
  };
  console.log(columnInputs);

  const handleDeleteColumn = (index: number) => {
    const updatedColumns = [...columnInputs];
    updatedColumns.splice(index, 1);
    setColumnInputs(updatedColumns);
  };

  return (
    <StyledTaskView as="form">
      <Header>{headerMsg}</Header>
      <FormRow label="Title" error="">
        <Input type="text" id="title" placeholder="e.g take a coffee break" />
      </FormRow>

      <div className="w-full">
        <P as="h2">Columns</P>
        {columnInputs.map((inputId, i) => (
          <SubtaskInput
            key={inputId}
            placeholder={`e.g Column ${inputId}`}
            onDelete={handleDeleteColumn}
            inputId={i}
          />
        ))}
        <Button
          btnType="secondary"
          style={{ width: "100%" }}
          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
            handleAddColumns(e)
          }
        >
          +Add New Columns
        </Button>
      </div>
      <Button>Create Task</Button>
    </StyledTaskView>
  );
}

export default NewBoard;
