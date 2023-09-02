import mongoose, { Schema } from 'mongoose';

const moodSchema = new Schema(
    {
        date: {type: Date, required: true},
        userName: {type: String, required: true},
        notes: {type: String, default: ""},
        moodRating: {type: Number, required: true},
    },
    {
        timestamps: true,
    }
)

const Mood = mongoose.models.Mood || mongoose.model('Mood', moodSchema);

export default Mood;