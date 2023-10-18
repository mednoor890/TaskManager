const express=require ("express")
//importing express using commonjs also we can do this by es modules
const bodyParser = require('body-parser');
const DbConnect=require("./config/dbConfig")
const cors = require('cors');
const taskRoutes=require("./routes/TaskRoutes")
const app = express()
DbConnect();
const corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200, 
  };
  
  app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use('/tasks', taskRoutes);
app.listen(3000,()=>{
    console.log("listening and running in port 3000")
})