import React from 'react';
import './Equipment.css'

const Equipment = (props) => {
    const {handeler,equipment} = props
    const {img,name,description,age,time} = equipment;
    return (
    <div className='eqipment'>
        <img src={img} alt="" />
        <div>
            <h4>{name}</h4>
            <p className='description'><b>Description:</b> {description}</p>
            <p>For Age: <b>{age}</b></p>
            <p>Time required: <b>{time}</b>s</p>
        </div>
        <button onClick={()=>handeler(time)}>Add to List</button>
    </div>
    );
};

export default Equipment;