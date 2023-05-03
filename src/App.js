import './App.css';
import React, { useState} from 'react';
import ShowData from './components/ShowData';
import Signup from './components/Signup';
import bgImage from "./images/park-background.jpg";
import Signin from './components/Signin';
import leafImg from '../src/images/leaf.png';


function App() {
    const [result, setResult] = useState([]);

    const updateResult = (personData)=>{
      setResult([...result, personData]);
    }
    
    return (

      <div className="App">
        <img src={bgImage} className='bgPark-img z-n1 position-absolute top-0 w-100' alt='bg-park-img' />
        <div className="set">
          <div><img src={leafImg} /></div>
          <div><img src={leafImg} /></div>
          <div><img src={leafImg} /></div>
          <div><img src={leafImg} /></div>
          <div><img src={leafImg} /></div>
          <div><img src={leafImg} /></div>
          <div><img src={leafImg} /></div>
          <div><img src={leafImg} /></div>
        </div>
        
        <Signin />
        {/* <Signup updateResult={updateResult} /> */}
        {/* <ShowData result={result} /> */}
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