import axios from "axios";
import { toast } from "react-toastify";
import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from "react";

interface GithubApiContextProps {
	user: User | null;
	repos: Repository[] | null;
	isLoading: boolean;
	setUser: (user: User | null) => void;
	setRepos: (repos: Repository[]) => void;
	getUserData(username: string): void;
}

const initialValue = {
	user: null,
	repos: null,
	setUser: () => null,
	setRepos: () => null,
	getUserData: () => {},
	isLoading: false,
};

export const GithubApiContext =
	createContext<GithubApiContextProps>(initialValue);

export const GithubApiProvider = ({ children }: { children?: ReactNode }) => {
	const [user, setUser] = useState<User | null>(null);
	const [repos, setRepos] = useState<Repository[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	const getUserData = (username: string): void => {
		axios
			.get(`https://api.github.com/users/${username}`)
			.then((res) => {
				const userData = res.data;
				setUser(userData);

				if (userData)
					axios
						.get(`https://api.github.com/users/${username}/repos`)
						.then((res) => {
							const reposData = res.data;
							setRepos(reposData);
						});

				setIsLoading(false);
			})
			.catch((err) =>
				toast.error("Usuário não encontrado", {
					position: "bottom-left",
					autoClose: 3000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				})
			);
	};

	useEffect(() => {
		if (!user) setRepos([]);
	}, [user]);

	return (
		<GithubApiContext.Provider
			value={{
				user,
				setUser,
				setRepos,
				repos,
				getUserData,
				isLoading,
			}}
		>
			{children}
		</GithubApiContext.Provider>
	);
};

export const useGithubApi = () => useContext(GithubApiContext);
