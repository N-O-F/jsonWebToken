require("dotenv").config();
const express = require("express")
const cors = require('cors')

const server = express()
const PORT = process.env.PORT || 5001;
server.use(express.json())
server.use(cors())
server.use(express.urlencoded({ extended: false }));
const authRoutes = require("./routers/authentication");
server.use("/api/v1/auth",authRoutes);
server.listen(PORT);