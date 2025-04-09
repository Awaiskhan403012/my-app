import mongoose from "mongoose";

const connectdb = async () =>{
    mongoose.connection.on('connected', ()=> console.log("Database is Connected"));
    mongoose.connection.on('error', (err)=> console.log("oops",err));

    await mongoose.connect(`${process.env.MONGO_URI}`);

    process.on('SIGINT', async ()=> {
        mongoose.connection.close();
        console.log("db connection closed");
        process.exit(0);
    })

}

export default connectdb;