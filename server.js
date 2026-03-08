const express = require("epress");
const cors = require("cors");
require("dotenv").config();

const logger = require("./middleware/logger");
const courseRoutes = require("./routes/courses")

const app=express();

app.use(cors());
app.use(express.json());
app.use(logger);

app.use("/api",courseRoutes);

app.get("/",(req,res) => {
    res.send("Course API is running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log("Server running on port"+PORT);
});