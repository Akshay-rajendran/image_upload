const imgmodel=require("../model/imagemodel")
const expresshandler=require("express-async-handler")


const imageadd=expresshandler( async(req,res)=>{
    try {
        if (!req.file){
            return res.status(500).json({error:"no file found"})
        }
        const imagefile=imgmodel({
            imagename:req.file.fieldname,
            imagepath:req.file.path
        })
        const saved=await imagefile.save()
        res.status(200).json(saved)
    } catch (error) {
        console.log(error);
    }
}) 
module.exports={
    imageadd
}