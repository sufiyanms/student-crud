import  express from "express";
const router=express.Router();
import Studentcontrler from "../controllers/studentcontrller.js";

router.get("/",Studentcontrler.GetAlldoc);
router.post("/",Studentcontrler.creatDoc);
router.get("/edit/:id",Studentcontrler.editDoc);
router.post("/update/:id",Studentcontrler.updatetDocByid);
router.post("/delete/:id",Studentcontrler.deleteDocByid);






export default router;