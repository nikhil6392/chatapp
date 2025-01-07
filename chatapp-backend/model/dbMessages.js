import mongoose from "mongoose";
const msgSchema = mongoose.Schema({
    message: String,
    name: String,
    timestamp: String,
    received: Boolean
})

export default mongoose.model('messagecollections', msgSchema)