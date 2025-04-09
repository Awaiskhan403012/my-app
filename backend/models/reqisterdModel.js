import mongoose from "mongoose";


const registerdSchema = new mongoose.Schema({
    registerName: {type: String, required: true},
    Email: {type: String, required: true},
    registerdEvent: {type: String, required: true},
    registerdShow: {type: String, required: true},

})

const Registermodel = mongoose.models.Register || mongoose.model('Register',registerdSchema);
export default Registermodel;