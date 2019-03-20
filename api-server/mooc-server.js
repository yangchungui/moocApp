const path = require("path")
const express = require("express")
const app = express()
app.use(express.static(path.resolve(__dirname, "../")))

const cartsdata = require("./personInfo-data")

app.use("/api/person", (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');

  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*')
  res.json(cartsdata)
})





app.listen(4000, () => {
    console.log("server is ready on port 4000")
})
