import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./styles.module.css";
import SidebarAccordion from "../SidebarAccordion/SidebarAccordion";
import PropTypes from "prop-types";

const { sideBar, sideBarLinks, sideBarItems, sideBarToggle } = styles;

function Sidebar({ items, isOpen }) {
  return (
    <div
      className={`m-0 sidebar ${isOpen ? "open" : "closed"} ${sideBar} vh-100`}
      style={{
        width: isOpen ? "280px" : "0",
        transition: "width 0.3s ease",
      }}
      aria-hidden={!isOpen}
    >
      {isOpen && (
        <>
          <h4
            className={`text-white pt-4 text-uppercase ms-4 mb-3 ${sideBarToggle}`}
          >
            Partners
          </h4>
          <Nav className={`flex-column m-2 ${sideBarLinks}`}>
            <SidebarAccordion>
              {items.map((item, index) => (
                <Nav.Link
                  className={`text-white ps-0 ${sideBarItems}`}
                  key={index}
                  href={item.link}
                  aria-label={`Navigate to ${item.label}`}
                >
                  <i className={`${item.icon} pe-2`}></i>
                  {item.label}
                </Nav.Link>
              ))}
            </SidebarAccordion>
          </Nav>
        </>
      )}
    </div>
  );
}

// Prop types for validation
Sidebar.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    })
  ).isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default Sidebar;
