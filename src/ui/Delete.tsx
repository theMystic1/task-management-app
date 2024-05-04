import Button from "./Button";
import { P, StyledTaskView } from "./TasksView";

type DeleteItem = {
  type: string;
  name: string;
  onCancel?: () => void;
  onConfirm?: () => void;
};

function Delete({ type, name }: DeleteItem) {
  return (
    <StyledTaskView>
      <h1 className="text-[2.4rem] text-red-200 ">Delete this {type}?</h1>
      <P as="h2">
        Are you sure you want to delete the '{name} board? This action will
        remove all columns and cannot be reversed
      </P>
      <div className="flex justify-between gap-8">
        <Button btnType="danger" className="w-full">
          Delete
        </Button>
        <Button btnType="secondary" className="w-full">
          Cancel
        </Button>
      </div>
    </StyledTaskView>
  );
}

export default Delete;
