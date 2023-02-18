import express from "express"
import cors from "cors"
import restaurants from "./api/restaurants.route.js"

/*'use strict';
const express = require('express');
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';*/

// App
const app = express()   // app use express

// That's is what express is going to use
app.use(cors())
app.use(express.json())

app.use("/api/v1/restaurants", restaurants)
app.use("*", (req, res) => { res.status(404).json({error: "not found"})})

export default app

/*app.get('/', (req, res) => {
  res.send('Hello World');
});*/

/*app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});*/