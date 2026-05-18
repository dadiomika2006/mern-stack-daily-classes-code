const express = require("express");
const app = express();
const PORT = 4000;
const connection=require("./config/db");
app.use(express.json());//middleware
connection();


const studentRouter=require("./routes/studentRouter")
const collegeRouter=require("./routes/collegeRouter")

app.use("/students",studentRouter);
app.use("/colleges",collegeRouter);

app.listen(PORT,()=>{
    console.log("server running on port",PORT);
    
})
