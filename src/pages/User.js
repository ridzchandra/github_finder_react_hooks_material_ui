/** @format */

import { Fragment, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import {
	Box,
	Button,
	Card,
	Container,
	Grid,
	makeStyles,
	Paper,
	Typography,
} from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";
import UserBio from "../components/UserBio";
import UserInfo from "../components/UserInfo";
import Repos from "../components/Repos";

const useStyles = makeStyles((theme) => ({
	btn: {
		borderRadius: 0,
	},
	checkIcon: {
		color: theme.palette.primary.main,
	},
	clearIcon: {
		color: "red",
	},
	hireable: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		margin: theme.spacing(1),
		backgroundColor: theme.palette.background.default,
	},
}));

const User = () => {
	const { login } = useParams();
	const [user, setUser] = useState(null);
	const [repos, setRepos] = useState(null);
	const classes = useStyles();
	const history = useHistory();

	useEffect(() => {
		axios
			.get(`https://api.github.com/users/${login}`, {
				headers: {
					Authorization: `token ${sessionStorage.getItem(
						"githubAccessToken"
					)}`,
				},
			})
			.then((result) => setUser(result.data))
			.catch((err) => console.log("Couldn't fetch the user data!", err));
		axios
			.get(
				`https://api.github.com/users/${login}/repos?per_page=5&?sort=created:asc`,
				{
					headers: {
						Authorization: `token ${sessionStorage.getItem(
							"githubAccessToken"
						)}`,
					},
				}
			)
			.then((result) => setRepos(result.data))
			.catch((err) => console.log(err, "Couldn't fetch repos!"));
	}, []);

	return (
		<Container>
			{user && (
				<Fragment>
					<Box display="flex" flexDirection="row">
						<Button
							variant="contained"
							disableElevation
							className={classes.btn}
							onClick={() => history.push("/search")}
						>
							Back To Search
						</Button>

						<Paper elevation={0} className={classes.hireable}>
							<Typography variant="body1">Hireable:</Typography>

							{user.hireable ? (
								<CheckIcon className={classes.checkIcon} />
							) : (
								<ClearIcon className={classes.clearIcon} />
							)}
						</Paper>
					</Box>

					<Grid
						container
						direction="column"
						justifyContent="flex-start"
					>
						<Grid item xs={12}>
							<UserBio user={user} />
						</Grid>
						<Grid item>
							<UserInfo user={user} />
						</Grid>
					</Grid>
				</Fragment>
			)}
			{repos && (
				<Fragment>
					<Repos repos={repos} />
				</Fragment>
			)}
		</Container>
	);
};

export default User;
