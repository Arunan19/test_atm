import React from 'react'
import Button from '../../components/atoms/button/Button'
import { useNavigate } from 'react-router-dom';
import './HomePage.css'

const HomePage = () => {
  return (
    <div className='home-container'>
        <div>
            <h2>Hello!!!</h2>
        </div>
        <div className='home-buttons'>
            <div className='buttons-left'>
                <div className='Depo'>
                    <Button onClick={()=>navigate("/Deposit")} classname="read-button">Deposit</Button>
                </div>
                <div>
                    <Button onClick={()=>navigate("/Withdrawal")} classname="read-button">Withdrawal</Button>
                </div>
            </div>
            <div className='buttons-right'>
                <div>
                    <Button onClick={()=>navigate("/Transection_history")} classname="read-button">Transection history</Button>
                </div>
                <div>
                    <Button onClick={()=>navigate("/")} classname="read-button">Logout</Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage