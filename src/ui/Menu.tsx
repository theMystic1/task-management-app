// import { HiPencil, HiTrash } from "react-icons/hi2";
// import styled from "styled-components";
// import Modal from "./Modal";
// import Delete from "./Delete";
// import Menus from "./Menus";
// import FormView from "./FormView";

// const StyledMenu = styled.div`
//   display: flex;
//   flex-direction: column;
//   color: var(--color-gray-400);
//   gap: 2rem;
//   background-color: var(--color-grey-0);
// `;

// // const List = styled.li`
// //   display: flex;
// //   align-items: center;
// //   gap: 1.2rem;
// //   cursor: pointer;
// // `;

// type MenuItem<T> = {
//   item: T;
// };

// type ItemType = {
//   title: string;
//   // other properties...
// };

// function Menu({ item }: MenuItem<ItemType>) {
//   return (
//     <StyledMenu>
//       <Modal>
//         <Menus.Menu>
//           <Menus.Toggle id={item.title} />
//           <Menus.List id={item.title}>
//             <Modal.Open opens="edit">
//               <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
//             </Modal.Open>
//             <Modal.Open opens="delete">
//               <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
//             </Modal.Open>
//           </Menus.List>
//           <Modal.Window name="edit">
//             {/* <CreateCabinForm cabinToEdit={cabin} /> */}
//             <FormView />
//           </Modal.Window>
//           <Modal.Window name="delete">
//             <Delete type="Board" name={item.title} />
//           </Modal.Window>
//         </Menus.Menu>
//       </Modal>
//     </StyledMenu>
// );
// }

// export default Menu;
