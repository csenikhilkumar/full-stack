const express = require('express')
const app = express()
let PORT = 3000

// routs handlers
app.get('/asd/nikhil', function (req, res) {
  res.json({msg :"hi am nikhil"})

})

app.listen(PORT,()=> {
  console.log(`Server is running on port ${PORT}`)
}) // which port is run