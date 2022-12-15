import { Schema, model } from 'mongoose';

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        user: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phone: {
            type: Number,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        admin: {
            type: Boolean,
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export default model('User', userSchema);