import styled from "styled-components";

type Colums = {
  columns: string;
};
const PageRow = styled.div<Colums>`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  gap: 2rem;
  /* width: 100%;
  height: 100%; */
`;

// function PageColumn() {
//   return (
//     <div>

//     </div>
//   )
// }

export default PageRow;
