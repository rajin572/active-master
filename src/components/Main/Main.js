import React, { useEffect, useState } from "react";
import Dashboard from "../Dashboard/Dashboard";
import Equipment from "../Equipment/Equipment";
import "./Main.css";
const Main = () => {
    const [equipments, setequipments] = useState([]);
    useEffect(() =>{
        fetch('equipments.json')
        .then(res => res.json())
        .then(data => setequipments(data))
    },[])
  return (
    <div className="main-container">
      <div className="equipment-container">
        {
        equipments.map((equipment) => (
          <Equipment
            key={equipment.id}
            equipment={equipment}
            // handeler={addToCartHandelar}
          ></Equipment>
        ))
        }
      </div>
      <div className="dashboard-container">
        <Dashboard></Dashboard>
      </div>
    </div>
  );
};

export default Main;
