import Accordion from "react-bootstrap/Accordion";
import PropTypes from "prop-types";

const SidebarAccordion = ({ children }) => {
  return (
    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <i className="fa fa-user pe-2" aria-hidden="true"></i>
          Partners
        </Accordion.Header>
        <Accordion.Body>{children}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

SidebarAccordion.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SidebarAccordion;
