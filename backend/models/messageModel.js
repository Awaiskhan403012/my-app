import mongoose from "mongoose";


const messageSchema = new mongoose.Schema({
    notofiSubject: {type: String, required: true},
    notfication: {type: String, required: true},

})

const messagemodel = mongoose.models.message || mongoose.model('message',messageSchema);
export default messagemodel;