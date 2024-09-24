import { memo } from "react";
import PropTypes from "prop-types";

const InputForm = memo(
  ({
    handleChange,
    handleBlur,
    values,
    touched,
    errors,
    labelName,
    inputType,
    name,
    disabled = false,
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
        <input
          disabled={disabled}
          type={inputType}
          className={`form-control rounded-0 ${
            touched[name] && errors[name] ? "is-invalid" : ""
          }`}
          id={name}
          name={name}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values[name]}
          required={requiredField}
          aria-invalid={touched[name] && Boolean(errors[name])}
          aria-describedby={`${name}Feedback`}
        />
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
InputForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  labelName: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  requiredField: PropTypes.bool,
};

export default InputForm;
