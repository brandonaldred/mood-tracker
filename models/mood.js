import mongoose, { Schema } from'mongoose';

const moodSchema = new Schema(
    {
        date: Date,
        notes: String,
        moodRating: Number
    },
    {
        timestamps: true,
    }
)

const Mood = mongoose.models.Mood || mongoose.model('Mood', moodSchema);

export default Mood;