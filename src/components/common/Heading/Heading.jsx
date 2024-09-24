import PropTypes from "prop-types";
import styles from "./styles.module.css";
const { breadcrumb, heading } = styles;
const Heading = ({ children }) => {
  return (
    <>
      <p className={breadcrumb}>Home / {children}</p>
      <h3 className={`py-3 ps-0 ms-1 ${heading}`}>{children}</h3>
    </>
  );
};
Heading.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Heading;
