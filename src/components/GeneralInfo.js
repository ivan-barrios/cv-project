const GeneralInfo = (props) => {
  const { name, email, phoneNum } = props.values;

  return (
    <div>
      <h2>Name: {name} </h2>
      <h2>Email: {email} </h2>
      <h2>Phone Number: {phoneNum} </h2>
    </div>
  );
};

export default GeneralInfo;
