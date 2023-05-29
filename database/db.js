import mongoose from "mongoose";



const DBConnection = async () => {
    try {
        await mongoose.connect(`mongodb+srv://jayaprakashc456:mongodbpassword@file-sharing.op7xxgt.mongodb.net/`,{ useNewUrlParser: true});
    } catch (error) {
        console.error("error while connecting to the database",error.message);
    }
}
export default DBConnection;