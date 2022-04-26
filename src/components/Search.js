/** @format */

import { Box, Button, makeStyles, TextField } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { Fragment, useState } from "react";

const useStyles = makeStyles((theme) => ({
	form: {
		marginBottom: theme.spacing(4),
	},
	textField: {
		marginBottom: theme.spacing(2),
	},
	searchBtn: {
		borderRadius: 0,
		marginBottom: theme.spacing(2),
		backgroundColor: theme.palette.primary.dark,
		color: "white",
		"&:hover": {
			color: "black",
			backgroundColor: theme.palette.primary.main,
		},
	},
	clearBtn: {
		borderRadius: 0,
		marginBottom: theme.spacing(2),
	},
	alert: {
		borderRadius: 0,
		marginBottom: theme.spacing(1),
	},
}));

const Search = ({ searchUsers, clearSearch }) => {
	const classes = useStyles();
	const [showAlert, setShowAlert] = useState(false);
	const [showClear, setShowClear] = useState(false);
	const [query, setQuery] = useState("");
	const search = (e) => {
		e.preventDefault();
		searchUsers(query, setShowAlert, setShowClear);
		setQuery("");
	};
	return (
		<Fragment>
			<Box display={showAlert ? "inherit" : "none"}>
				<Alert
					severity="error"
					color="info"
					className={classes.alert}
					// variant="filled"
				>
					Can't search when input is empty!
				</Alert>
			</Box>
			<form
				onSubmit={search}
				className={classes.form}
				noValidate
				autoComplete="off"
			>
				<TextField
					className={`${classes.textField} userSearch`}
					margin="dense"
					variant="outlined"
					label="User"
					placeholder="Search for Users..."
					fullWidth
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>

				<Button
					className={classes.searchBtn}
					variant="contained"
					// color="secondary"
					fullWidth
					size="large"
					disableElevation
					onClick={search}
				>
					Search
				</Button>
				<Box display={showClear ? "inherit" : "none"}>
					<Button
						className={classes.clearBtn}
						variant="contained"
						fullWidth
						size="large"
						disableElevation
						onClick={clearSearch}
					>
						Clear Search
					</Button>
				</Box>
			</form>
		</Fragment>
	);
};

export default Search;
