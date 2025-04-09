import mongoose from "mongoose";


const BuyersSchema = new mongoose.Schema({
    buyerName: {type: String, required: true},
    buyerEmail: {type: String, required: true},
    Event: {type: String, required: true},
    ShowName: {type: String, required: true},

})

const Buyersmodel = mongoose.models.Buyers || mongoose.model('Buyers',BuyersSchema);
export default Buyersmodel;