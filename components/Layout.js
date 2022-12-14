import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <>
      <StyledHeading>Header</StyledHeading>
      {children}
      <footer>
        <img src="/Download.png" alt="footer" />
      </footer>
    </>
  );
};

const StyledHeading = styled.h1`
  color: red;
`;

export default Layout;
