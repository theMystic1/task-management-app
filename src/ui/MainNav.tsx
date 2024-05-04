import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Modal from "./Modal";
import NewBoard from "./NewBoard";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  color: var(--color-gray-400);
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    margin-bottom: 2rem;

    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
    /* color: var(--color-grey-0); */
  }

  &:link {
    color: #fff;
  }

  &.active:link,
  &.active:visited {
    background-color: var(--color-brand-600);
    color: #fff;
    border-top-right-radius: 3rem;
    border-bottom-right-radius: 3rem;
  }

  width: 90%;
`;

const StyledToggle = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  bottom: 8rem;
  width: 100%;
`;

const Toggle = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  background-color: var(--color-grey-50);
  justify-content: center;
  padding: 2rem;
  width: 80%;
`;

const ToggleIcon = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  background-color: var(--color-grey-0);
  border-radius: 50%;
`;
const ToggleBg = styled.div`
  height: 3rem;
  width: 6.4rem;
  display: flex;
  align-items: center;
  padding: 0.8rem;
  background-color: var(--color-brand-600);
  border-radius: 2rem;
  cursor: pointer;
`;

export const Img = styled.img`
  width: 2.4rem;
`;

const HideBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
  margin-top: 2rem;
  color: var(--color-gray-400);
  font-size: 2.4rem;
  border: none;
  background-color: transparent;
`;

const navLists = [
  {
    name: "Platform Launch",
    linkUrl: "/platform",
  },
  {
    name: "Marketing Plan",
    linkUrl: "/marketing",
  },
  {
    name: "Roadmap",
    linkUrl: "/roadmap",
  },
];

function MainNav() {
  return (
    <nav style={{ position: "relative", height: "100%" }}>
      <NavList>
        <li
          style={{
            padding: "0 2rem",
            letterSpacing: "0.1rem",
            fontWeight: "800",
            margin: "2.4rem 0",
            textTransform: "uppercase",
          }}
        >
          all boards ({navLists.length})
        </li>

        {navLists.map((nav) => (
          <li key={nav.linkUrl}>
            <StyledNavLink to={nav.linkUrl}>
              <Img src="/assets/icon-board.svg" alt="icon" />
              <span style={{ fontWeight: "800", fontSize: "2rem" }}>
                {nav.name}
              </span>
            </StyledNavLink>
          </li>
        ))}

        <Modal>
          <Modal.Open opens="board">
            <li
              style={{
                display: "flex",
                alignItems: "center",
                padding: "0 2.4rem",
                gap: "2rem",
              }}
            >
              <Img src="/assets/icon-board.svg" alt="icon" />
              <span
                style={{
                  fontWeight: "800",
                  fontSize: "2rem",
                  color: "#635fc7",
                  cursor: "pointer",
                }}
              >
                + Create New Board
              </span>
            </li>
          </Modal.Open>
          <Modal.Window name="board">
            <NewBoard type="add" />
          </Modal.Window>
        </Modal>
      </NavList>

      <StyledToggle>
        <Toggle>
          <Img src="/assets/icon-light-theme.svg" alt="" />
          <ToggleBg>
            <ToggleIcon />
          </ToggleBg>
          <Img src="/assets/icon-dark-theme.svg" alt="" />
        </Toggle>

        <HideBtn>
          <Img src="/assets/icon-hide-sidebar.svg" alt="" />
          <span>Hide Sidebar</span>
        </HideBtn>
      </StyledToggle>
    </nav>
  );
}

export default MainNav;
