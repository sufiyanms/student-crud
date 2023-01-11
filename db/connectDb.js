import mongoose from "mongoose";


// const connectDb=async(DATABASE_URL)=>{
//     try{
//         const DB_OPTION={
//             dbName:"school"
//         };

//         await mongoose.connect(DATABASE_URL,DB_OPTION);
//           console.log("connected successfull");
//     } catch (err){
//         console.log(err);
//     }
    
// };


const connectDb=()=>{
    mongoose.connect('mongodb://0.0.0.0:27017/school')
.then(()=>{console.log("connected data base")}
).catch((err)=>{
    console.log(err)
});

}



export default connectDb;