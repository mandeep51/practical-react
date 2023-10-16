import React, { useState } from 'react'
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

let Home=()=>{
    let [cvc,setCvc]=useState('')
    let [name,setName]=useState('')
    let [expiry,setExpiry]=useState('')
    let [number,setNumber]=useState('')
    let [focus,setFocus]=useState('')
    return <>
    <Cards cvc={cvc} name={name} expiry={expiry} number={number} focused={focus}  ></Cards>

    <input type="tel" name="number" placeholder="number" onChange={(e)=>setNumber(e.target.value)}  setFocus={(e)=>setFocus(e.target.name)} ></input>
    <input type="text" name="name" placeholder="name" onChange={(e)=>setName(e.target.value)}  setFocus={(e)=>setFocus(e.target.name)} ></input>
    <input type="text" name="expiry" placeholder="expiry" onChange={(e)=>setExpiry(e.target.value)}  setFocus={(e)=>setFocus(e.target.name)} ></input>
    <input type="cvc" name="cvc" placeholder="cvc" onChange={(e)=>setCvc(e.target.value)}  setFocus={(e)=>setFocus(e.target.name)} ></input>
    
    </>
}

export default Home