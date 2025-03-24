import React from "react";
import InventoryItem from "./InventoryItem";

const inventoryData = [
    { id: 1, name: "Laptop", quantity: 5, category: "Electronics" },
    { id: 2, name: "Notebook", quantity:20, category: "Stationery"},
    { id: 3, name: "Desk Chair", quantity:10, category: "Furniture"}
] ;

const InventoryList = () => {
    return (
        <div>
            <h2>Inventory List</h2>
            {inventoryData.map(item => (
                <InventoryItem key={item.id} item={item} />
            ))}
        </div>
    ) ;
} ;

export default InventoryList;
