import axios from "axios";
import { createContext, ReactNode, useContext, useState } from "react";

interface GithubApiContextProps {
	user: User | null;
	repos: Repository[] | null;
	getUserData(username: string): void;
}

const initialValue = {
	user: null,
	repos: null,
	getUserData: () => {},
};

export const GithubApiContext =
	createContext<GithubApiContextProps>(initialValue);

export const GithubApiProvider = ({ children }: { children?: ReactNode }) => {
	const [user, setUser] = useState<User | null>(null);
	const [repos, setRepos] = useState<Repository[]>([]);

	const getUserData = (username: string): void => {
		axios.get(`https://api.github.com/users/${username}`).then((res) => {
			const userData = res.data;
			setUser(userData);

			if (userData)
				axios
					.get(`https://api.github.com/users/${username}/repos`)
					.then((res) => {
						const reposData = res.data;
						setRepos(reposData);
					});
		});
	};

	return (
		<GithubApiContext.Provider
			value={{
				user,
				repos,
				getUserData,
			}}
		>
			{children}
		</GithubApiContext.Provider>
	);
};

export const useGithubApi = () => useContext(GithubApiContext);
