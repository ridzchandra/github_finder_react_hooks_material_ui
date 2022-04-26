/** @format */

import {
	Avatar,
	Button,
	CardContent,
	Grid,
	makeStyles,
	Paper,
	Typography,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	paper: {
		justifyContent: "center",
		alignItems: "center",
		display: "flex",
		flexDirection: "column",
		maxWidth: theme.spacing(42),
		height: theme.spacing(28),
		padding: theme.spacing(2),
	},
	outline: {
		borderStyle: "dashed",
	},
	avatar: {
		width: theme.spacing(7),
		height: theme.spacing(7),
	},
	moreBtn: {
		backgroundColor: theme.palette.secondary.dark,
		color: "white",
		"&:hover": {
			color: "black",
		},
		borderRadius: 0,
	},
	link: {
		color: "white",
		textDecoration: "none",
	},
}));

const User = ({ user }) => {
	const classes = useStyles();
	const history = useHistory();

	return (
		<Grid item xs={6} sm={4} md={3}>
			<Paper
				className={classes.paper}
				variant="outlined"
				classes={{ outlined: classes.outline }}
			>
				<Avatar
					className={classes.avatar}
					alt={user.login}
					src={user.avatar_url}
				/>
				<CardContent>
					<Typography variant="h6">{user.login}</Typography>
				</CardContent>

				<Button
					variant="contained"
					disableElevation
					className={classes.moreBtn}
					onClick={() => {
						history.push(`/users/${user.login}`);
					}}
				>
					More
				</Button>
				{/* </a> */}
			</Paper>
		</Grid>
	);
};

export default User;
