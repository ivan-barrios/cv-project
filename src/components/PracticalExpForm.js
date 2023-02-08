const PracticalExpForm = () => {
  return (
    <form>
      <label htmlFor="companyName">Company Name</label>
      <input type="text" id="companyName" placeholder="Your company name" />
      <label htmlFor="positionTitle">Position Title</label>
      <input type="text" id="positionTitle" placeholder="Your position title" />
      <label htmlFor="mainTasks">Main Tasks</label>
      <input type="text" id="mainTasks" placeholder="Your main tasks" />
      <label htmlFor="startEnd">Start-End Date in Company</label>
      <input type="text" id="startEnd" placeholder="Your start and end date" />
    </form>
  );
};

export default PracticalExpForm;
