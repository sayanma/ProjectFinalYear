const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send(`Hello World from server`);
});

app.listen(3000, ()=>{
    console.log(`Server is running at port 3000`);
});