import GeneralInfoForm from "./GeneralInfoForm";
import EducationalExpForm from "./EducationalExpForm";
import PracticalExpForm from "./PracticalExpForm";

const Form = (props) => {
  const { general, educational, practical } = props.values;

  return (
    <div>
      <GeneralInfoForm
        values={general}
        onSubmitGeneral={props.onSubmitGeneral}
      />
      <EducationalExpForm
        values={educational}
        onSubmitEducational={props.onSubmitEducational}
      />
      <PracticalExpForm
        values={practical}
        onSubmitPractical={props.onSubmitPractical}
      />
    </div>
  );
};

export default Form;
