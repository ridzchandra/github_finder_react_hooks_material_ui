/** @format */

import { Box, CircularProgress, Grid } from "@material-ui/core";
import User from "./User";

const Users = ({ state }) => {
	return state.loading ? (
		<Box
			display="flex"
			justifyContent="center"
			// alignItems="center"
			marginTop="40vh"
			height="100vh"
		>
			<CircularProgress
				size={70}
				// thickness={5}
			/>
		</Box>
	) : (
		<Grid container spacing={3}>
			{state.users.map((user) => (
				<User user={user} key={user.id} />
			))}
		</Grid>
	);
};

export default Users;
