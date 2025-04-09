import mongoose from "mongoose";


const EventSchema = new mongoose.Schema({
    eventName: {type: String, required: true},
    eventCategory: {type: String, required: true},
    eventImage: {type: String, required: true},
    eventVenue: {type: String, required: true},
    eventDate: {type: String, required: true},
    expirationDate: {type: String, required: true},
    eventDescription: {type: String, required: true},
    eventtrailer: {type: String, required: true},


})

const Eventmodel = mongoose.models.event || mongoose.model('event',EventSchema);
export default Eventmodel;