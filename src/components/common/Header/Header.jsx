import { Button, Navbar } from "react-bootstrap";
import PropTypes from "prop-types";
import styles from "./styles.module.css";
import profileIcon from "../../../assets/profileIcon.png";

const {
  headerBackground,
  toggleIcon,
  navbarBrand,
  logoBrand,
  logoutBtn,
  userName,
} = styles;

function Header({ toggleSidebar }) {
  return (
    <Navbar
      className={`${headerBackground} justify-content-between`}
      expand="lg"
    >
      <div className="d-flex align-items-center">
        <i
          className={`${toggleIcon} fa fa-bars ms-3`}
          onClick={toggleSidebar}
          style={{ cursor: "pointer" }}
          aria-hidden="true"
        ></i>
        <Navbar.Brand
          className={` ${navbarBrand} ps-3 text-white`}
          href="#home"
        >
          Logo
        </Navbar.Brand>
        <p className={`${logoBrand} m-0 ms-5 logoLink`}>
          Sale Link:{" "}
          <a
            href="http://localhost:5173"
            className="text-decoration-none text-white"
          >
            http://localhost:5173
          </a>
        </p>
      </div>
      <Navbar.Toggle className="navbarToggeler" />
      <Navbar.Collapse className="navBarCollapse">
        <Button className={`${logoutBtn} bg-transparent border-0`}>
          Logout
        </Button>
        <h5 className={`${userName} m-0 mx-2`}>Abdullah Shaaban</h5>
        <img
          src={profileIcon}
          className="rounded-circle shadow-4 me-1"
          width={30}
          alt="Avatar"
        />
      </Navbar.Collapse>
    </Navbar>
  );
}

Header.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default Header;
