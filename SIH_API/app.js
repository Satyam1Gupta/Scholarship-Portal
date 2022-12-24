const express = require('express')
const app = express()
const port = process.env.PORT||8000;
const mongoose= require("mongoose");

const DB= "mongodb+srv://TeamSih:Teamsih2468@cluster0.i4nhnfk.mongodb.net/API?retryWrites=true&w=majority";

mongoose.connect(DB
).then(()=>{
  console.log(`connection successful`);
}).catch((err)=>console.log(`no connection`));

app.use(express.json());

app.use(require('./router'));
app.get('/', (req, res) => {
  res.send('Hello World! sah')
})

app.listen(port, () => {
  console.log(`Example app is listening on port ${port}`)
}) 