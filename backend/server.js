const express= require("express");

const app=express();
const port=3000;

app.use(express.json());
let items =[];
// get all lost items
app.get("/api/items", (req,res)=> {
    res.json(items);
});
app.post("/api/items", (req, res) => {
    const newItem= {
        id: Date.now(),
        name: req.body.name,
        color: req.body.color,
        location: req.body.location,
        date: req.body.date,
        feature: req.body.feature
    };
    items.push(newItem);
    res.statues(201).json(newItem);
    
});

app.listen(port, () => {
    console.log('backend running at http://localhost:${PORT}');

});