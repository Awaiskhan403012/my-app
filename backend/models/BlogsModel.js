import mongoose from "mongoose";


const BlogSchema = new mongoose.Schema({
    BlogName: {type: String, required: true},
    BlogCategory: {type: String, required: true},
    BlogImage: {type: String, required: true},
    BlogDate: {type: String, required: true},
    Blogtag: {type: String, required: true},

})

const Blogmodel = mongoose.models.Blog || mongoose.model('Blog',BlogSchema);
export default Blogmodel;