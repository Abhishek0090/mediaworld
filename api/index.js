import express from "express";
import cors from "cors";
const app = express();
const port = 8800;
import userRoutes from "./routes/users.js"; //use .js for avoiding error
import authRoutes from "./routes/auths.js"; //use .js for avoiding error
import postRoutes from "./routes/posts.js"; //use .js for avoiding error
import likeRoutes from "./routes/likes.js"; //use .js for avoiding error
import commentRoutes from "./routes/comments.js"; //use .js for avoiding error
import cookieParser from "cookie-parser";

///middlewares
app.use((req,res,next)=>{
  res.header("Access-Control-Allow-Credentials",true)  //for sending our cookies on client

  next();
})
app.use(express.json()); //for accepting data  in json form


app.use(cors({
  origin:"http://localhost:3000"
}));  //wrting client url.



app.use(cookieParser());

app.get('/', (req, res) => {
  return res.json(["Hello bro"]);
})

app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/likes', likeRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/auth', authRoutes);

app.listen(port, () => {
  console.log(`Your website is running on http://localhost:${port}`);
})