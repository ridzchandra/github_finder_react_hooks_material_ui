/** @format */

import { Box, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	signInBtn: {
		borderRadius: 0,
		color: "white",
		backgroundColor: theme.palette.primary.dark,
		"&:hover": {
			backgroundColor: theme.palette.primary.main,
			color: "black",
		},
	},
	signInText: {
		color: "white",
		"&:hover": {
			color: "black",
		},
	},
}));

const Login = () => {
	const classes = useStyles();
	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			height="80vh"
		>
			<Button
				variant="contained"
				// color="secondary"
				className={classes.signInBtn}
				size="large"
			>
				<a
					href={`https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}`}
					className={classes.signInText}
					style={{ textDecoration: "none" }}
				>
					Sign In With Github
				</a>
			</Button>
		</Box>
	);
};

export default Login;
