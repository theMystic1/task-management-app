import styled from "styled-components";
import Button from "./Button";

const P = styled.p`
  color: var(--color-gray-400);
`;

function EmptyBoard() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 h-full w-full">
      <P>This Board is empty. Create a new column to get started.</P>

      <Button>+ Add New Column</Button>
    </div>
  );
}

export default EmptyBoard;
