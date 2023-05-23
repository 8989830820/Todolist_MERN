import  express  from "express";
import  cors  from "cors";
// import todoRoutes from "./routes/todos/todo.js";
import path from 'path';
const app = express();

// const __dirname = path.dirname(new URL(import.meta.url).pathname);

const __dirname = path.dirname(process.argv[1]);
 console.log(__dirname)
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// app.use("/todos",todoRoutes);

// app.use(express.static(path.join(__dirname,'public')));
console.log((path.join(__dirname,'public')));

console.log(process.argv[0]);
console.log(process.argv[1]);


app.
listen(5000,()=>{
    console.log("server started")
})



