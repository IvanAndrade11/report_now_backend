import { Schema, model } from 'mongoose';

const imageSchema = new Schema(
	{
		title: {
			type: String,
			required: true
		},
		src: {
			type: String,
			required: true
		},
		id_news: {
			type: String,
			required: true
		},
		id_user: {
			type: String,
			required: true
		}
	},
	{
		timestamps: true,
		versionKey: false
	}
);

export default model('Image', imageSchema);