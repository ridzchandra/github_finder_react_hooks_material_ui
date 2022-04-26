/** @format */

import { makeStyles, Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	repoPaper: {
		marginTop: theme.spacing(1),
		borderRadius: 0,
		borderStyle: "solid",
		borderColor: theme.palette.divider,
		borderWidth: 2,
		padding: 25,
		height: theme.spacing(7),
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
}));

const Repo = ({ repo }) => {
	const classes = useStyles();
	return (
		<Paper elevation={0} className={classes.repoPaper}>
			<Typography variant="h6">
				<a
					href={repo.html_url}
					style={{ textDecoration: "none", color: "#00bcd4" }}
				>
					{repo.name}
				</a>
			</Typography>
		</Paper>
	);
};

export default Repo;
