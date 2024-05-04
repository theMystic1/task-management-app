import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
  padding: 2rem;
`;

const Img = styled.img`
  /* height: 9.6rem; */
  width: auto;
`;

function Logo() {
  // const src = isDarkMode ? "/logo-dark.png" : "/logo-light.png";

  return (
    <StyledLogo>
      <Img src="/assets/logo-dark.svg" alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
