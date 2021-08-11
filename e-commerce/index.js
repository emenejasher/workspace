const express = require("express");
const app = express();




app.get("/",(req, res) =>{
    res.send("Welcome to our e-commerce site")
});




const PORT = 9000;

app.listen(PORT, () =>
console.log(`Server started on port http://127.0.0.1:${PORT}`)
);