import React from "react";

const InventoryItem = ({ item })=>{
    return (
        <div style={{border:"1px solid black", padding:"10px", margin: "5px"}}>
            <h3>{item.name}</h3>
            <p>Quantity: {item.quantity} </p>
            <p>Category: {item.category}</p>
        </div>
    );
};

export default InventoryItem ;
