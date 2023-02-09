const GeneralInfo = (props) => {
  const { name, email, phoneNumber } = props.values;

  return (
    <div>
      <h2>Name: {name} </h2>
      <h2>Email: {email} </h2>
      <h2>Phone Number: {phoneNumber} </h2>
    </div>
  );
};

export default GeneralInfo;
