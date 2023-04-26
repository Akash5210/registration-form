import './App.css';
import React, {useState} from 'react';

function App() {
    const [person, setPerson] = useState({
      fullName: "",
      gender: "",
      state: "",
      dob: "",
      file: ""
    });
    return (
      <div className="App">
        <h1>Hello</h1>
        <div className="full-name">
          <input type="text" value={person.fullName} 
          onChange={(e)=> setPerson({...person,fullName: e.target.value})} />
        </div>
        <div className="gender">
          <lable for="gender">Gender:</lable>
          <div onChange={(e)=> setPerson({...person,gender: e.target.value})}>
            <lable><input type="radio" value="male" name="gender" />Male</lable>
            <lable><input type="radio" value="female" name="gender" />Female</lable>
          </div>
        </div>
  
        <div className="state">
          <lable for="state">State: </lable>
          <select name="state" onClick={(e)=> setPerson({...person,state: e.target.value})} >
            <option value="bihar">Bihar</option>
            <option value="uttarPradesh">Uttar Pradesh</option>
            <option value="newDelhi">New Delhi</option>
          </select>
        </div>
  
        <div className="dob">
          <lable for="dob">DOB: </lable>
          <input type="date" name="dob" 
          onChange={(e)=> setPerson({...person, dob: e.target.value})}/>
        </div>
  
        <div className="file">
          <lable for="file">File: </lable>
          <input type="color" name="file" 
           onChange={(e)=> setPerson({...person, file: e.target.value})}/>
        </div>
  
        <div style={{border:"1px solid black", textAlign:"left"}}>
          Full Name: {person.fullName}<br/>
          Gender: {person.gender}<br/>
          State: {person.state}<br/>
          DOB: {person.dob}<br/>
          File: {person.file}
        </div>
      </div>
    );
  }
export default App;
