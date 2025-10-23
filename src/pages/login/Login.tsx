import React, { useState } from 'react'
import ReactDOM from 'react-dom/client';
import Input from '../../components/atoms/input/Input'
import Button from '../../components/atoms/button/Button'
import './Login.css'
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate();
    const[value_ATM,setValue1]= React.useState("");
      const handleInput_ATM=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setValue1(e.target.value);
        console.log(e.target.value);
      };
    const[value_pin,setValue]= React.useState("");
      const handleInput_pin=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setValue(e.target.value);
        console.log(e.target.value);
      };
  return (
    <div className='login-container'>
        <div>
            <h1>ATM & CDM WEBSITE</h1>
            <p>Welcome</p>
        </div>
        <div>
            <div className='ATM_input'>
                <Input 
                   id="ATM Card Number"
                   type=" number"
                   name="ATM Card Number"
                   onChange={handleInput_ATM}
                   value={value_ATM}
                   placeholder="Enter ATM Card Number"
                   className="ATM_input"
                     />
            </div>
            <div className='Pin_input'>
                <Input 
                   id="Pin"
                   type=" password"
                   name="pin"
                   onChange={handleInput_pin}
                   value={value_pin}
                   placeholder="Enter Pin Number"
                   className="Pin_input"
                     />
            </div>
            <div className='login-buttions'>
                <div className='read-button'>
                    <Button onClick={()=>navigate('/home')} classname="read-button">Submit</Button>
                </div>
                <div className='read-button'>
                    <Button onClick={()=>alert("Nothing in here")} classname="read-button">Cancle</Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login