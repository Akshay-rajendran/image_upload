const express=require("express")
const router=express.Router()
const {upload}=require("../upload")
const {imageadd}=require("../contrroller/imagecontroler")


router.post("/imageadd",upload.single("image"),imageadd)

module.exports=router