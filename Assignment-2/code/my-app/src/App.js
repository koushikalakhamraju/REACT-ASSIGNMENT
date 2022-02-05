import logo from './logo.svg';
import './App.css';



function App(props) {
  const { employee } = props;

  return (
    <div className="container">
      {/* Start your React code here */}
      <div className="employeeDetails">
        <img className="ProfilePic" src={employee.profileImg} alt="give proper adress" />
        <p className="employeeName">{employee.name}</p>
        <label className="locationDetails">Location</label>
        <b>{employee.location}</b>
        <label className="bloodgroupDetails">BloodGroup</label>
        <b>{employee.bloodGroup}</b>
        <label className="ageDetails">Age</label>
        <b>{employee.age}</b>
      </div>
    </div>
  )
}



export default App;
