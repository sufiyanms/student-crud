import studemtModel from "../model/student.js";

class Studentcontrler {

    static creatDoc=async (req,res)=>{
        console.log("create doc method");
        try{
            const {name,age,fees}=req.body
            const doc=new studemtModel({
                name:name,
                age:age,
                fees:fees
            })
            const result=await doc.save()
            // console.log(result);
            res.redirect("/student")

        } catch (err){
            console.log(err);

        }
       

    }


    static GetAlldoc=async (req,res)=>{
        try{
            const result=await studemtModel.find()
            // console.log(result);

            res.render("index.ejs",{data:result});

        } catch (err){
            console.log(err);

        }
        
    };


    
    static editDoc=async (req,res)=>{
        try{
            // console.log(req.params.id);
            const result=await studemtModel.findById(req.params.id);
            console.log(result);
            res.render("edit.ejs",{data:result})

        }catch (err){
            console.log(err)

        }
      

    }

     
    static updatetDocByid=async (req,res)=>{
        // console.log(req.params.id)
        // console.log(req.body)
        try{
            const result=await studemtModel.findByIdAndUpdate(req.params.id,req.body)
            // console.log(result);

            res.redirect("/student")

        }catch (err){
            console.log(err)
        }


    }

      
    static deleteDocByid=async (req,res)=>{
        // console.log(req.params.id)
        try{
            const result=await studemtModel.findByIdAndDelete(req.params.id)
            res.redirect("/student")


        }catch (err){
            console.log(err)
        }

    }
}



export default Studentcontrler;