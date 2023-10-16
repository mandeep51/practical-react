import React, { useState } from 'react'
import { ChromePicker } from 'react-color'

function Home() {
    let [color,setColor]=useState('#fff')
  return (
    <>
    <div height="100px" width="200px" style={{backgroundColor:color}}></div>
    <h1 style={{color:color}}>hlo</h1>
    <br></br>
    <br></br>
    <br></br>
      <ChromePicker height="100px" width="200px" color={color} onChange={updatedColor=>setColor(updatedColor.hex)}  ></ChromePicker>
    </>
  )
}

export default Home
