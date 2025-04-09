import mongoose from "mongoose";


const EventspeakersSchema = new mongoose.Schema({
    speakerName: {type: String, required: true},
    speakerImg: {type: String, required: true},
    speakertalent: {type: String, required: true},

})

const Eventspeakersmodel = mongoose.models.Eventspeakers || mongoose.model('Eventspeakers',EventspeakersSchema);
export default Eventspeakersmodel;