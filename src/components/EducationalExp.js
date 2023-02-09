const EducationalExp = (props) => {
  const { schoolName, titleOfStudy, dateOfStudy } = props.values;

  return (
    <div>
      <h2>School Name: {schoolName}</h2>
      <h2>Title of Study: {titleOfStudy}</h2>
      <h2>Date of Study: {dateOfStudy}</h2>
    </div>
  );
};

export default EducationalExp;
