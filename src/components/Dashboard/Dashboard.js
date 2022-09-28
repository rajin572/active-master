import React from 'react';
import './Dashboard.css'
import userImg from '../../images/user.png'
const Dashboard = () => {
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
                    <p><span>10</span>s</p>
                    <p><span>20</span>s</p>
                    <p><span>30</span>s</p>
                    <p><span>40</span>s</p>
                    <p><span>50</span>s</p>
                </div>
            </div>
            <div className='exercise-details'>
                <h5>Exercise Details</h5>
                <div className='exercise-time'>
                    <p>Exercise time</p>
                    <p><span>0</span> secound</p>
                </div>
                <div className='break-time'>
                    <p>Break time</p>
                    <p><span>0</span> secound</p>
                </div>
            </div>
            <button>Activity Completed</button>
        </div>
    );
};

export default Dashboard;