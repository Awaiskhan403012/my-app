import mongoose from "mongoose";


const venueSchema = new mongoose.Schema({
    venueName: {type: String, required: true},
    venuelocation: {type: String, required: true},
    venueImg: {type: String, required: true},
    venueDescription: {type: String, required: true},

})

const venuemodel = mongoose.models.venue || mongoose.model('Venue',venueSchema);
export default venuemodel;