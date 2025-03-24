import React from "react";

const InventoryForm = () =>{
    return (
        <div>
            <h2>Add New Inventory Item</h2>
            <ul>
                <li><input type="text" placeholder="Item Name" /></li>
                <li><input type="text" placeholder="Quantity" /></li>
                <li><input type="text" placeholder="Category" /></li>
                <li><button>Add Item</button></li>
            </ul>
        </div>
    );
};

export default InventoryForm;
