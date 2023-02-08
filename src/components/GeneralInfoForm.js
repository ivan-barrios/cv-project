const GeneralInfoForm = () => {
  return (
    <form>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" placeholder="Your name" />
      <label htmlFor="email">Email</label>
      <input type="text" id="email" placeholder="Your email" />
      <label htmlFor="phoneNum">Phone Number</label>
      <input type="text" id="phoneNum" placeholder="Your phone number" />
    </form>
  );
};

export default GeneralInfoForm;
