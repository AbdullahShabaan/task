import { memo } from "react";
import PropTypes from "prop-types";

const InputSelectForm = memo(
  ({
    handleIdentification,
    optionValues,
    handleBlur,
    values,
    touched,
    errors,
    labelName,
    name,
    requiredField = false,
  }) => {
    return (
      <div className="form-group">
        <label
          htmlFor={name}
          className="form-label text-uppercase opacity-75"
          style={{ fontSize: "13px" }}
        >
          {labelName} {requiredField && <span className="text-danger">*</span>}
        </label>
        <select
          className={`form-select rounded-0 ${
            touched[name] && errors[name] ? "is-invalid" : ""
          }`}
          id={name}
          name={name}
          onChange={(e) => {
            handleIdentification(e);
          }}
          onBlur={handleBlur}
          value={values[name]}
          required={requiredField}
          aria-invalid={touched[name] && Boolean(errors[name])}
          aria-describedby={`${name}Feedback`}
        >
          <option value="" disabled>
            Select Identification Type
          </option>
          {optionValues?.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        {touched[name] && errors[name] && (
          <div id={`${name}Feedback`} className="invalid-feedback">
            {errors[name]}
          </div>
        )}
      </div>
    );
  }
);

// Prop types for validation
InputSelectForm.propTypes = {
  handleIdentification: PropTypes.func.isRequired,
  optionValues: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleBlur: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  labelName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  requiredField: PropTypes.bool,
};

export default InputSelectForm;
