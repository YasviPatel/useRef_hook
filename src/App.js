import logo from './logo.svg';
import './App.css';
import { useState,useEffect,useRef } from 'react';


function App() {
  const [name,setName]=useState('hiii');
  const name1 = useRef('');
  console.log('j')


  useEffect(()=>{
    console.log("useeffect run")
    name1.current = name;
    console.log(name1.current + " in useeffect")
  },[name])
  return (
    <>
      <input value={name} onChange={e=>setName(e.target.value)} ref={name1}/>
      {console.log(name1.current + " in return")}
      <div>My name is {name} and  {name1.current}</div>
      
    </>
  );
}

export default App;
