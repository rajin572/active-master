import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Dashboard.css'
import userImg from '../../images/user.png'
import { addToDb, showToWeb } from '../../utilities/fakedb';
const Dashboard = (props) => {
    const[breakTime, setBreakTime] = useState(0);
    useEffect(() => {
        const data = showToWeb();
        setBreakTime(data)
    },[])
    const addToBreakTime = (value) =>{
        setBreakTime(value)
        addToDb(value)
    }
    const notify = () => toast.success("Your All Activity has completed");
    return (
        <div className='dashboard'>
            <div className="user-info">
                <div className='user'>
                    <img src={userImg} alt="" />
                    <div>
                        <h4>Din Islam Rajin</h4>
                        <p>Dhaka, Bangladesh</p>
                    </div>
                </div>
                <div className='user-details'>
                    <div>
                        <h4><b>75</b>kg</h4>
                        <p>Weight</p>
                    </div>
                    <div>
                        <h4><b>5.7</b></h4>
                        <p>Height</p>
                    </div>
                    <div>
                        <h4><b>21</b></h4>
                        <p>Years</p>
                    </div>
                </div>
            </div>
            <div className='break-div'>
                <h5>Add A Break</h5>
                <div className='break'>
                    <p onClick={()=>addToBreakTime(10)}><span>10</span>s</p>
                    <p onClick={()=>addToBreakTime(20)}><span>20</span>s</p>
                    <p onClick={()=>addToBreakTime(30)}><span>30</span>s</p>
                    <p onClick={()=>addToBreakTime(40)}><span>40</span>s</p>
                    <p onClick={()=>addToBreakTime(50)}><span>50</span>s</p>
                </div>
            </div>
            <div className='exercise-details'>
                <h5>Exercise Details</h5>
                <div className="excercise-box">
                    <div className='exercise-time'>
                        <p>Exercise time</p>
                        <p><span>{props.time}</span> secound</p>
                    </div>
                    <div className='break-time'>
                        <p>Break time</p>
                        <p><span>{breakTime}</span> secound</p>
                    </div>
                </div>
                <button onClick={notify}>Activity Completed</button>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Dashboard;