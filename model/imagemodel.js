




const mongoose = require("mongoose");

const imgschema = new mongoose.Schema({
imagepath:{
    type:String
},
imagename:{
    type:String
}
});

const imgModel = mongoose.model("image", imgschema);

module.exports = imgModel;