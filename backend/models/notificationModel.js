import mongoose from "mongoose";


const notificationSchema = new mongoose.Schema({
    notofiSubject: {type: String, required: true},
    notfication: {type: String, required: true},

})

const notficationsmodel = mongoose.models.notfications || mongoose.model('notfications',notificationSchema);
export default notficationsmodel;