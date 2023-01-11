import express  from "express";
import {join} from "path"
const app=express();
const DATABASE_URL="'mongodb://0.0.0.0:27017";
import router from "./routes/web.js";
import  connectDb from "./db/connectDb.js";
import bodyParser from "body-parser";
import ejs from "ejs";

let port=3000;

connectDb();
app.use(express.urlencoded({extended:true}))

app.use(express.static(join(process.cwd(),"public")))
// app.use(bodyParser.urlencoded({extended:true}))



// // app.set("view","./view");
// app.set(`view engine`,"ejs");


app.set('views', './views');
app.set('view engine', 'ejs');


// app.set("view engine","ejs");
// app.set("view","./view");

app.use("/student",router)





app.listen(port,()=>{
    console.log("server started");
})