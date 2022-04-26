/** @format */

import { Chip, Grid, makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	infoPaper: {
		marginTop: theme.spacing(2),
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
	chip: {
		borderRadius: 0,
	},
}));

const UserInfo = ({ user }) => {
	const classes = useStyles();
	return (
		<Paper elevation={0} className={classes.infoPaper}>
			<Grid
				container
				direction="row"
				alignItems="center"
				justifyContent="center"
				spacing={1}
			>
				<Grid item>
					<Chip
						className={classes.chip}
						label={`Followers: ${user.followers}`}
						color="secondary"
					/>
				</Grid>
				<Grid item>
					<Chip
						className={classes.chip}
						label={`Following: ${user.following}`}
						color="primary"
					/>
				</Grid>

				<Grid item>
					<Chip
						className={classes.chip}
						label={`Public Repos: ${user.public_repos}`}
						color="default"
					/>
				</Grid>

				<Grid item>
					<Chip
						className={classes.chip}
						label={`Public Gists: ${user.public_gists}`}
						color="default"
					/>
				</Grid>
			</Grid>
		</Paper>
	);
};

export default UserInfo;
