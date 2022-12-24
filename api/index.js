import express   from "express";
import userRoutes from "./routes/users.js"; //use .js for avoiding error
import authRoutes from "./routes/auths.js"; //use .js for avoiding error
import postRoutes from "./routes/posts.js"; //use .js for avoiding error
import likeRoutes from "./routes/likes.js"; //use .js for avoiding error
import commentRoutes from "./routes/comments.js"; //use .js for avoiding error
 

const app = express();
const port = 8800;


app.get('/',(req,res)=>{
  return res.json(["Hello bro"]);
})

app.use('/api/users',userRoutes);
app.use('/api/posts',postRoutes);
app.use('/api/likes',likeRoutes);
app.use('/api/comments',commentRoutes);
app.use('/api/auths',authRoutes);

app.listen(port,()=>{
  console.log(`Your website is running on http://localhost:${port}`);
})