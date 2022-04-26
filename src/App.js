/** @format */

import { createTheme, makeStyles, ThemeProvider } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Fragment } from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import Home from "./pages/Home";
import { Route, Switch, useHistory } from "react-router-dom";
import Login from "./pages/Login";
import User from "./pages/User";

const useStyles = makeStyles((theme) => {
	return {
		title: {
			flexGrow: 1,
		},
		githubIcon: {
			marginRight: theme.spacing(2),
		},
		toolbar: theme.mixins.toolbar,
	};
});

const theme = createTheme({
	palette: {
		primary: {
			main: "#00bcd4",
		},
		secondary: {
			main: "#00e5ff",
		},
	},
});

function App() {
	const classes = useStyles();
	const history = useHistory();
	const clearSearch = (e) => {
		e.preventDefault();
		history.push("/search");
	};
	return (
		<Fragment>
			<CssBaseline />
			<ThemeProvider theme={theme}>
				<AppBar position="static">
					<Toolbar>
						<GitHubIcon
							className={classes.githubIcon}
							onClick={clearSearch}
						/>
						<Typography
							variant="h6"
							className={classes.title}
							onClick={clearSearch}
						>
							Github Finder
						</Typography>
					</Toolbar>
				</AppBar>
				<div className={classes.toolbar}></div>
				<Switch>
					<Route path="/" exact>
						<Login />
					</Route>
					<Route path="/search" exact>
						<Home clearSearch={clearSearch} />
					</Route>
					<Route path="/users/:login" exact>
						<User />
					</Route>
				</Switch>
			</ThemeProvider>
		</Fragment>
	);
}

export default App;
