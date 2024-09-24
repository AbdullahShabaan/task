import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import InputForm from "../InputForm/InputForm";
import InputSelectForm from "../InputSelectForm/InputSelectForm";
import styles from "./styles.module.css";

const { formBackground, formStepperTitle, formBtn } = styles;

const Form = () => {
  const [identificationValidate, setIdentificationValidate] = useState("");
  const [validateMessage, setValidateMessage] = useState("");

  const initialValues = {
    firstName: "",
    secondName: "",
    lastName: "",
    email: "",
    identificationType: "",
    identificationNumber: "",
    phoneNumber: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    secondName: Yup.string().required("Second name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    identificationType: Yup.string().required(
      "Identification type is required"
    ),
    identificationNumber: Yup.string()
      .matches(identificationValidate, validateMessage)
      .required("Identification number is required"),
    phoneNumber: Yup.string()
      .matches(/^[0-9]{11}$/, "Phone number must be exactly 11 digits")
      .required("Phone number is required"),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const handleIdentification = (e) => {
    const selectedType = e.target.value;
    let validationRegex = "";
    let message = "";

    if (selectedType === "passport") {
      validationRegex = /^[A-PR-WY][1-9]\d{7}$/;
      message = "It's not a valid passport number";
    } else if (selectedType === "nationalId") {
      validationRegex = /^\d{11}$/;
      message = "It's not a valid National ID number";
    }

    setIdentificationValidate(validationRegex);
    setValidateMessage(message);
    formik.handleChange(e);
  };

  const fields = [
    { name: "firstName", label: "First Name", type: "text", required: true },
    { name: "secondName", label: "Second Name", type: "text", required: true },
    { name: "lastName", label: "Last Name", type: "text", required: true },
    { name: "phoneNumber", label: "Phone Number", type: "tel", required: true },
    { name: "email", label: "Email", type: "email", required: true },
  ];

  return (
    <form
      onSubmit={formik.handleSubmit}
      className={`g-3 bg-white mt-2 ms-1 ${formBackground}`}
    >
      <h6 className={`px-3 py-2 m-0 ${formStepperTitle}`}>
        Step (1): Basic Data
      </h6>
      <div className="row p-3 g-4">
        {fields.map((field) => (
          <div
            className={
              field.name == "phoneNumber" || field.name == "email"
                ? "col-md-6"
                : "col-md-4"
            }
            key={field.name}
          >
            <InputForm
              {...formik}
              requiredField={field.required}
              labelName={field.label}
              inputType={field.type}
              name={field.name}
            />
          </div>
        ))}
        <div className="col-md-6">
          <InputSelectForm
            {...formik}
            handleIdentification={handleIdentification}
            optionValues={["passport", "nationalId"]}
            labelName="Identification Type"
            name="identificationType"
            requiredField={true}
          />
        </div>
        <div className="col-md-6">
          <InputForm
            {...formik}
            labelName="Identification Number"
            inputType="text"
            name="identificationNumber"
            disabled={!formik.values.identificationType}
            requiredField={true}
          />
        </div>
        <div className="col-12 text-end">
          <button
            className={`${formBtn} btn text-white rounded-1`}
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
