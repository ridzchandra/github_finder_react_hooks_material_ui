/** @format */

import { Container, makeStyles } from "@material-ui/core";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import Users from "../components/Users";
import axios from "axios";
import Search from "../components/Search";

const useStyles = makeStyles((theme) => ({}));

const Home = ({ clearSearch }) => {
	const searchUsers = async (query, setShowAlert, setShowClear) => {
		if (query) {
			const res = await axios.get(`https://api.github.com/search/users`, {
				params: {
					q: query,
				},
			});
			setState({ ...state, users: res.data.items });
			setShowClear(true);
		} else {
			setShowAlert(true);

			setTimeout(() => {
				setShowAlert(false);
			}, 3000);
		}
	};
	const classes = useStyles();
	const [state, setState] = useState({
		users: [],
		user: null,
		loading: false,
		accessToken:
			(true && sessionStorage.getItem("githubAccessToken")) || "",
	});

	const getUsers = async () => {
		if (!state.accessToken) {
			// console.log("getting token");
			const resToken = await axios.get(
				"http://localhost:5000/api/github/token"
			);
			sessionStorage.setItem("githubAccessToken", resToken.data.value);
			setState({ ...state, accessToken: resToken.data.value });
		}
		//localhost:3000/search
		// console.log("getting users");
		http: console.log(state.accessToken);
		const resUsers = await axios.get("https://api.github.com/users", {
			headers: {
				Authorization: `token ${state.accessToken}`,
			},
		});
		// console.log(resUsers.data);
		setState({ ...state, loading: false, users: resUsers.data });
	};

	useEffect(() => {
		setState({ ...state, loading: true });
		try {
			getUsers();
		} catch (e) {
			console.log(e);
		}
	}, [state.accessToken]);

	return (
		<Container>
			<Search searchUsers={searchUsers} clearSearch={clearSearch} />
			<Users state={state} />
		</Container>
	);
};

export default Home;
