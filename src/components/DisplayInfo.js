import GeneralInfo from "./GeneralInfo";

const DisplayInfo = (props) => {
  return (
    <div>
      <GeneralInfo values={props.values.general} />
    </div>
  );
};

export default DisplayInfo;
