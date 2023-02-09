const PracticalExp = (props) => {
  const { companyName, positionTitle, mainTasks, dateStartEnd } = props.values;
  return (
    <div>
      <h2>Company Name: {companyName}</h2>
      <h2>Position Title: {positionTitle}</h2>
      <h2>Main Tasks: {mainTasks}</h2>
      <h2>Start-End Date in Company: {dateStartEnd}</h2>
    </div>
  );
};

export default PracticalExp;
