import { useEffect } from "react";
import { FullWidthWrapper } from "../../components/FullWidthWrapper";
import { useGithubApi } from "../../hooks/GithubApiContext";
import { HomeLayout } from "../../layouts/HomeLayout";

export const Home = () => {
	const { user, repos, getUserData } = useGithubApi();

	useEffect(() => {
		getUserData("filipedeschamps");
	}, []);

	useEffect(() => {
		console.log(user);
		console.log(repos);
	}, [user, repos]);

	return <HomeLayout />;
};
