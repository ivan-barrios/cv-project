import GeneralInfo from "./GeneralInfo";
import EducationalExp from "./EducationalExp";
import PracticalExp from "./PracticalExp";

const DisplayInfo = (props) => {
  return (
    <div>
      <GeneralInfo values={props.values.general} />
      <EducationalExp values={props.values.educational} />
      <PracticalExp values={props.values.practical} />
    </div>
  );
};

export default DisplayInfo;
