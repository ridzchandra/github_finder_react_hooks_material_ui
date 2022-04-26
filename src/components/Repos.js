/** @format */

import axios from "axios";
import { useEffect } from "react";
import Repo from "./Repo";

const Repos = ({ repos }) => {
	return repos.map((repo) => <Repo repo={repo} key={repo.id} />);
};

export default Repos;
