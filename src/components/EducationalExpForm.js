const EducationalExpForm = () => {
  return (
    <form>
      <label htmlFor="schoolName">School Name</label>
      <input type="text" id="schooleName" placeholder="Your school name" />
      <label htmlFor="titleOfStudy">Title of Study</label>
      <input type="text" id="titleOfStudy" placeholder="Your title of study" />
      <label htmlFor="dateOfStudy">Date of Study</label>
      <input type="text" id="dateOfStudy" placeholder="Your date of study" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default EducationalExpForm;
