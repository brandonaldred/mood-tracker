import mongoose, { Schema } from'mongoose';

const userSchema = new Schema(
    {
        first_name: String,
        last_name: String,
        email_address: String,
        username: String,
        password: String,
        location: String,
        tracking: Array
    },
    {
        timestamps: true,
    }
)

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;