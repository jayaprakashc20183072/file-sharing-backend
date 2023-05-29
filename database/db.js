dotenv.config();
import mongoose from "mongoose";
import dotenv from "dotenv";
const DATABASE = process.env.DATABASE;


const DBConnection = async () => {
    try {
        await mongoose.connect(`${DATABASE}`,{ useNewUrlParser: true});
    } catch (error) {
        console.error("error while connecting to the database",error.message);
    }
}
export default DBConnection;