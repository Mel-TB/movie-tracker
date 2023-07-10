import Logo from "../logo/logo.component";
import Nav from "./navbar.styles";

const NavBar = ({ children }) => {
  return (
    <Nav>
      <Logo />

      {children}
    </Nav>
  );
};

export default NavBar;
