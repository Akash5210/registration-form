import './App.css';
import React, { useState} from 'react';
import ShowData from './components/ShowData';
import Signup from './components/Signup';

function App() {
    const [result, setResult] = useState([]);

    const updateResult = (personData)=>{
      setResult([...result, personData]);
    }
    
    return (
      <div className="App container mt-4 px-4 py-4">
        <Signup updateResult={updateResult} />
        <ShowData result={result} />
      </div>
    );
  }
export default App;





// const handleUpload =async ()=>{
    //   const response = await fetch("http://localhost:3000/",{
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json; charset=utf-8"
    //     },
    //     body: JSON.stringify(result)
    //   })
    //   const data = await response.json();
    //   console.log(data);
    // }
    // useEffect(()=>{
    //   handleUpload();
    // },[result])