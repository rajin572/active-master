import React from 'react';
import './Equipment.css'

const Equipment = (props) => {
    const {img,name,description,age,time} = props.equipment;
    return (
        <div className='eqipment'>
        <img src={img} alt="" />
        <div>
            <h4>{name}</h4>
            <p className='description'><b>Description:</b> {description}</p>
            <p>For Age: <b>{age}</b></p>
            <p>Time required: <b>{time}</b>s</p>
        </div>
        <button>Add to Cart</button>
    </div>
    );
};

export default Equipment;