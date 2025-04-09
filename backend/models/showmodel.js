import mongoose from "mongoose";


const ShowSchema = new mongoose.Schema({
    showName: {type: String, required: true},
    showEvent: {type: String, required: true},
    showImage: {type: String, required: true},
    showVenue: {type: String, required: true},
    showDate: {type: String, required: true},
    expirationDate: {type: String, required: true},
    showDescription: {type: String, required: true},

})

const Showmodel = mongoose.models.Show || mongoose.model('Show',ShowSchema);
export default Showmodel;