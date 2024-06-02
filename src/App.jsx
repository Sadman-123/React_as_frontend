import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Lol from './Lol'
function App() {
  const [dat,setdat]=useState([]);
  useEffect(()=>{
    axios.get('https://pythonboss.vercel.app/data')
    .then(res=>{
      setdat(res.data)
    })
    .catch(err=>console.log(err))
  },[])
  return (
    <>
    <div className='cont'>
    <div className='app'>
      <div className='logo'>
      <i className="fa-brands fa-python"></i>  <i className="fa-brands fa-react" id='react'></i>
      </div>
      <h1>
        {dat.name}
      </h1>
      <h2>
        {dat.ID}
      </h2>
      <h3>
        {dat.Dept}
      </h3>
    </div>
    </div>
    </>
    
  )
}

export default App
