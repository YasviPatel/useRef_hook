import logo from './logo.svg';
import './App.css';
import { useState,useEffect,useRef } from 'react';


function App() {
  const [name,setName]=useState('hiii');
  const prevName = useRef('');


  useEffect(()=>{
    prevName.current = name;
  },[name])
  return (
    <>
      <input value={name} onChange={e=>setName(e.target.value)}/>
      <div>My name is {name} and before it was {prevName.current}</div>
      
    </>
  );
}

export default App;
