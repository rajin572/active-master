import React, { useEffect, useState } from "react";
import Dashboard from "../Dashboard/Dashboard";
import Equipment from "../Equipment/Equipment";
import "./Main.css";
const Main = () => {
    const [equipments, setequipments] = useState([]);
    const[time, setTime] = useState(0);
    useEffect(() =>{
        fetch('equipments.json')
        .then(res => res.json())
        .then(data => setequipments(data))
    },[])
    const addToExerciseTime = (value) =>{
        const newTime = time + value;
        setTime(newTime)
    }
  return (
    <div className="main-container">
      <div className="equipment-container">
        {
        equipments.map((equipment) => (
          <Equipment
            key={equipment.id}
            equipment={equipment}
            handeler={addToExerciseTime}
          ></Equipment>
        ))
        }
      </div>
      <div className="dashboard-container">
        <Dashboard time={time}></Dashboard>
      </div>
    </div>
  );
};

export default Main;
