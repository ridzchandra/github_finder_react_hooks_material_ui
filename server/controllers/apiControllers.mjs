/** @format */

import CredentialModel from "../models/credential.mjs";
import axios from "axios";

export const exchangeCodeForToken = (req, res) => {
	const getClientCredentials = async () => {
		const resClientId = await CredentialModel.findOne({ name: "clientId" });
		const clientId = resClientId.value;
		const resClientSecret = await CredentialModel.findOne({
			name: "clientSecret",
		});
		const clientSecret = resClientSecret.value;
		const resAccessToken = await axios.post(
			"https://github.com/login/oauth/access_token",
			{},
			{
				params: {
					client_id: clientId,
					client_secret: clientSecret,
					code: code,
				},
				headers: {
					Accept: "application/json",
				},
			}
		);

		const replaced = await CredentialModel.findOneAndReplace(
			{ name: "accessToken" },
			{ name: "accessToken", value: resAccessToken.data.access_token }
		).exec();

		const accessToken = new CredentialModel({
			name: "accessToken",
			value: resAccessToken.data.access_token,
		});

		if (!replaced) {
			accessToken
				.save()
				.then((result) => console.log(result))
				.catch((err) => console.log("failed saving token"));
		}

		return "Access token successfully saved";
	};

	const code = req.query.code;

	if (code) {
		getClientCredentials();
	} else {
		console.error("No code received from Github");
	}
	res.redirect("http://localhost:3000/search");
};

export const sendAccessToken = async (req, res) => {
	let result = null;
	do {
		result = await CredentialModel.findOneAndDelete({
			name: "accessToken",
		}).exec();
	} while (!result);
	res.json(result);
};
