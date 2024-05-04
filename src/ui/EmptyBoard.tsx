import styled from "styled-components";
import Button from "./Button";

const P = styled.p`
  color: var(--color-gray-400);
`;

function EmptyBoard() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem",
        height: "100%",
        width: "100%",
      }}
    >
      <P>This Board is empty. Create a new column to get started.</P>

      <Button>+ Add New Column</Button>
    </div>
  );
}

export default EmptyBoard;
