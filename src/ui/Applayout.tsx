import { Outlet } from "react-router-dom";

import styled from "styled-components";
import Sidebar from "./SideBar";
import Header from "./Header";

const StyledAppLayout = styled.div`
  display: grid;

  height: 100vh;

  @media (min-width: 640px) {
    grid-template-columns: 30rem 1fr;
    grid-template-rows: auto 1fr;
  }
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  @media (min-width: 640px) {
    padding: 4rem 2rem 6.4rem;
  }
  overflow: scroll;
`;

const Container = styled.div`
  /* min-width: 120rem; */
  /* margin: 0 auto; */
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Container className="mmm">
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
