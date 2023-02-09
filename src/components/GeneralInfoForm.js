const GeneralInfoForm = (props) => {
  return (
    <div>
      <form onSubmit={props.onSubmitGeneral}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Your name" />
        <label htmlFor="email">Email</label>
        <input type="text" id="email" placeholder="Your email" />
        <label htmlFor="phoneNum">Phone Number</label>
        <input type="number" id="phoneNum" placeholder="Your phone number" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default GeneralInfoForm;
