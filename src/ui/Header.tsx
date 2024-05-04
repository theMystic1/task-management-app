import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import Modal from "./Modal";
import FormView from "./FormView";
import Delete from "./Delete";
import Menus from "./Menus";
import { HiPencil, HiTrash } from "react-icons/hi2";
import NewBoard from "./NewBoard";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: space-between;
  height: 8rem;
`;

const H1 = styled.h1`
  font-size: 2.4rem;
  font-weight: 500;
  color: var(--color-grey-500);
  font-weight: 600;
`;

function Header() {
  const location = useLocation();

  const { pathname } = location;
  const header: string =
    pathname === "/platform"
      ? "Platform Launch"
      : pathname === "/marketing"
      ? "Marketing Plan"
      : pathname === "/roadmap"
      ? "Roadmap"
      : "";
  return (
    <StyledHeader>
      <H1>{header}</H1>
      <span style={{ display: "flex", alignItems: "center", gap: "2.4rem" }}>
        <Modal>
          <Modal.Open opens="addTask">
            <Button>+Add New Task</Button>
          </Modal.Open>
          <Modal.Window name="addTask">
            <FormView type="add" />
          </Modal.Window>
        </Modal>
        <Modal>
          <Menus>
            <Menus.Menu>
              <Menus.Toggle id={header} />
              <Menus.List id={header}>
                <Modal.Open opens="editBoard">
                  <Menus.Button icon={<HiPencil />}>Edit Board</Menus.Button>
                </Modal.Open>

                <Modal.Open opens="deleteBoard">
                  <Menus.Button icon={<HiTrash />}>Delete Board</Menus.Button>
                </Modal.Open>
              </Menus.List>

              <Modal.Window name="editBoard">
                <NewBoard type="edit" />
              </Modal.Window>

              <Modal.Window name="deleteBoard">
                <Delete type="Board" name={header} />
              </Modal.Window>
            </Menus.Menu>
          </Menus>
        </Modal>
      </span>
    </StyledHeader>
  );
}

export default Header;
