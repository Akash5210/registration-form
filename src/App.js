import './App.css';
import React, {useEffect, useState} from 'react';
import ShowData from './ShowData';

function App() {
    const dataClean = {
      fullName: "",
      gender: "",
      state: "",
      dob: "",
      colour: ""
    }
    const [result, setResult] = useState([]);
    const [person, setPerson] = useState(dataClean);

    const handleResult = (e)=>{
      e.preventDefault();
      setResult([...result, person]);
      setPerson(dataClean);
    }
    const handleUpload =async ()=>{
      const response = await fetch("http://localhost:3000/",{
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(result)
      })
      const data = await response.json();
      console.log(data);
    }
    useEffect(()=>{
      handleUpload();
    },[result])
    return (
      <div className="App">
        <h3>Basic Details</h3>

        <form onSubmit={handleResult}>
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
          <input type="date" name="dob" value={person.dob}
          onChange={(e)=> setPerson({...person, dob: e.target.value})}/>
        </div>
  
        <div className="colour">
          <lable for="colour">Colour: </lable>
          <input type="color" name="colour" value={person.colour}
           onChange={(e)=> setPerson({...person, colour: e.target.value})}/>
        </div>
  
        <div style={{border:"1px solid black", textAlign:"left"}}>
          Full Name: {person.fullName}<br/>
          Gender: {person.gender}<br/>
          State: {person.state}<br/>
          DOB: {person.dob}<br/>
          Colour: {person.file}
        </div>

        <button type='submit'>Submit</button>
        </form>
        <ShowData result={result} />
      </div>
    );
  }
export default App;
