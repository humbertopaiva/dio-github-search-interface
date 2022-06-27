import { useEffect } from "react";
import { useGithubApi } from "../../hooks/GithubApiContext";
import { RepositoryCard } from "../RespositoryCard";
import * as S from "./styles";

export const RepositoriesGrid = () => {
	const { repos, setRepos, user } = useGithubApi();

	return (
		<S.Container>
			{repos?.map((repo) => (
				<RepositoryCard
					key={repo.id}
					description={repo.description}
					title={repo.name}
					url={repo.html_url}
				/>
			))}
		</S.Container>
	);
};
