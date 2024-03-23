import React from 'react';
import { useState } from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  const[selected,setselected]= useState(null)
  const toggle=(i)=>{
    if (selected==i){
      return setselected(null)
    }
    // const setselected: (value:any)=>void
    setselected(i)
  }
  return <div className='wrapper'>
    <div className='accordation'>
       {data.map((item,i)=>(
        <div className='item'>
          <div className='title' onClick={()=> toggle(i)}>
            <h2>{item.title}</h2>
            <span>{selected===i?'^':'>'}</span>
          </div>
          <div className={selected===i?'content show':'content'}>{item.response}</div>
        </div>

       ))}
    </div>
  </div>
}

const data=[
  {
    title:'the first title',
    response:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    title:'the second title',
    response:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    title:'the third title',
    response:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    title:'the fourth title',
    response:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  
  
]


export default App;
