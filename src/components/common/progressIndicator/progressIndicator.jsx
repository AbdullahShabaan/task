import PropTypes from "prop-types";
import styles from "./styles.module.css";
const {
  circleBackground,
  circleBackgroundActive,
  stepperBar,
  stepperCircle,
  stepperTitle,
} = styles;
const Stepper = ({ steps, currentStep }) => {
  return (
    <div className="d-flex flex-column ms-4">
      <div className="position-relative ">
        <div className={stepperBar}></div>

        {steps.map((step, index) => (
          <div key={index}>
            <div
              className={`mt-5 stepper position-absolute rounded-circle ${stepperCircle} ${
                index < currentStep ? circleBackgroundActive : circleBackground
              }`}
              style={{
                top: `${index * 30}px`,
              }}
            ></div>
            <p
              className={`position-absolute ms-3 ${stepperTitle}`}
              style={{
                fontSize: index < currentStep ? "14px" : "12px",
                fontWeight: index < currentStep ? "bold" : "",
                top: `${index * 30}px`,
              }}
            >
              {step}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
Stepper.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentStep: PropTypes.number.isRequired,
};

export default Stepper;
