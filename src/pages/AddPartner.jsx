import Form from "../components/common/Form/Form";
import Heading from "../components/common/Heading/Heading";
import Stepper from "../components/common/progressIndicator/progressIndicator";

const AddPartner = () => {
  const steps = [
    "Basic Data",
    "Verify e mail",
    "Verify e money",
    "Package Data",
    "Complete Data",
    "Activate Partner",
  ];
  const currentStep = 1;

  return (
    <>
      <Heading>Add Partner</Heading>

      <div className="d-flex">
        <div>
          <p className="m-0 text-danger text-align-end required-filed">
            * means this field is required
          </p>
          <Form />
        </div>
        <div className="col-3 stepper">
          <Stepper steps={steps} currentStep={currentStep} />
        </div>
      </div>
    </>
  );
};

export default AddPartner;
