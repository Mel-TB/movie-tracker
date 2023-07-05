import SearchNavBar from "../search-navbar/search-navbar.component";
import Logo from "../logo/logo.component";

const NavBar = ({ children }) => {
  return (
    <nav className='nav-bar'>
      <Logo />

      {children}
    </nav>
  );
};

export default NavBar;
