import express   from "express";
import userRoutes from "./routes/users.js"; //use .js for avoiding error
 

const app = express();
const port = 8800;


app.get('/',(req,res)=>{
  return res.json(["Hello bro"]);
})

app.use('/api/users',userRoutes);

app.listen(port,()=>{
  console.log(`Your website is running on http://localhost:${port}`);
})