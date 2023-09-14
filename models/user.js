import mongoose, { Schema } from'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new Schema(
    {
        first_name: {type: String, required: true},
        last_name: {type: String, required: true},
        email_address: {type: String, required: true, unique: true},
        username: {type: String, required: true, unique: true},
        password: {type: String, required: true},
        location: {type: String, required: true},
        birthday: {type: Date, required: true},
        avatar: {type: String, required: false, default: ''},
        tracking: Array
    },
    {
        timestamps: true,
    }
)

userSchema.pre('save', function(next) {
    const user = this
    bcrypt.hash(user.password, 10, (error, hash) => { 
        user.password = hash
        next()
    })
})

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;