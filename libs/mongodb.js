import mongoose from 'mongoose';

const connectMongoDB = async () => {
    if (mongoose.connections[0].readyState) return;
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("connected to MongoDB")
    } catch (error) {
        console.log(error)
    }
}

export default connectMongoDB;