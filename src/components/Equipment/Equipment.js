import React from 'react';
import './Equipment.css'

const Equipment = (props) => {
    const {handeler,equipment} = props
    const {img,name,description,age,time} = equipment;
    return (
    <div className='eqipment'>
        <div className="eqipmentInfo">
            <img src={img} alt="" />
            <div className='eqipmentDetails'>
                <h4>{name}</h4>
                <p className='description'><b>Description:</b> {description}</p>
                <p>For Age: <b>{age}</b></p>
                <p>Time required: <b>{time}</b>s</p>
            </div>
        </div>
        <div className="eqipmentButton">
            <button onClick={()=>handeler(time)}>Add to List</button>
        </div>
    </div>
    );
};

export default Equipment;