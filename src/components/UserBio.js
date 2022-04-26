/** @format */

import {
	Avatar,
	Button,
	Grid,
	makeStyles,
	Paper,
	Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	avatar: {
		width: theme.spacing(14),
		height: theme.spacing(14),
	},
	bioPaper: {
		marginTop: theme.spacing(2),
		borderRadius: 0,
		borderStyle: "solid",
		borderColor: theme.palette.divider,
		borderWidth: 2,
		padding: 25,
		height: theme.spacing(42),
		display: "flex",
	},
}));

const UserBIo = ({ user }) => {
	const classes = useStyles();
	return (
		<Paper className={classes.bioPaper} elevation={0}>
			<Grid
				container
				direction="row"
				justifyContent="space-evenly"
				alignItems="center"
			>
				<Grid
					item
					container
					direction="column"
					alignItems="center"
					xs={6}
				>
					<Grid item>
						<Avatar
							className={classes.avatar}
							alt={user.login}
							src={user.avatar_url}
						/>
					</Grid>
					<Grid item>
						<Typography variant="h5">{user.name}</Typography>
					</Grid>
					<Grid item>
						<Typography variant="body1">{`Location: ${user.location}`}</Typography>
					</Grid>
				</Grid>
				<Grid
					item
					container
					direction="column"
					justifyContent="space-evenly"
					spacing={2}
					xs
				>
					{user.bio && (
						<Grid item>
							<Typography variant="h6">Bio</Typography>
						</Grid>
					)}
					{user.bio && (
						<Grid item>
							<Typography variant="body2">{user.bio}</Typography>
						</Grid>
					)}

					<Grid item>
						<Button
							color="primary"
							variant="contained"
							style={{ borderRadius: 0 }}
							disableElevation
						>
							<a
								href={user.html_url}
								style={{
									color: "white",
									textDecoration: "none",
								}}
							>
								Visit Github Profile
							</a>
						</Button>
					</Grid>
					{user.login && (
						<Grid item>
							<Typography variant="body1">{`Username: ${user.login}`}</Typography>
						</Grid>
					)}

					{user.company && (
						<Grid item>
							<Typography variant="body1">{`Company: ${user.company}`}</Typography>
						</Grid>
					)}

					{user.blog && (
						<Grid item>
							<Typography variant="body1">{`Website: ${user.blog}`}</Typography>
						</Grid>
					)}
				</Grid>
			</Grid>
		</Paper>
	);
};

export default UserBIo;
