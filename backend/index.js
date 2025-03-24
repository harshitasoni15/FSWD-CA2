const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const InventoryItem = require('./models/InventoryItem');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Inventory Management API');
});

app.post('/Inventory',(req,res)=>{
    const(name,iption,price,quantity) = req.body;
    const newItem = new InventoryItem={
        name,
        description,
        price,
        quantity
    }
});

try{
    const Item = await.newItem.save();
    res.status(201).json(item);
    }catch(err){}

const PORT = 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('MongoDB Connected');
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error('MongoDB connection failed:', err.message);
        process.exit(1);
    });
