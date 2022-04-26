/** @format */

import mongoose from "mongoose";
const { Schema, model } = mongoose;

const credentialSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		value: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

const CredentialModel = model("Credential", credentialSchema);

export default CredentialModel;
