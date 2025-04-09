import mongoose from "mongoose";


const EventpartnerSchema = new mongoose.Schema({
    partnerName: {type: String, required: true},
    partnerImg: {type: String, required: true},
})

const Eventpartnersmodel = mongoose.models.Eventpartners || mongoose.model('Eventpartners',EventpartnerSchema);
export default Eventpartnersmodel;