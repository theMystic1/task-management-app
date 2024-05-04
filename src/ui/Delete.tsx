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
      <h1 style={{ color: "#ea5555", fontSize: "2.4rem" }}>
        Delete this {type}?
      </h1>
      <P as="h2">
        Are you sure you want to delete the '{name} board? This action will
        remove all columns and cannot be reversed
      </P>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "2rem",
        }}
      >
        <Button btnType="danger" style={{ width: "100%" }}>
          Delete
        </Button>
        <Button btnType="secondary" style={{ width: "100%" }}>
          Cancel
        </Button>
      </div>
    </StyledTaskView>
  );
}

export default Delete;
