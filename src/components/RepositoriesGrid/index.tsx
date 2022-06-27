import { useEffect } from "react";
import { useGithubApi } from "../../hooks/GithubApiContext";
import { RepositoryCard } from "../RespositoryCard";
import * as S from "./styles";

export const RepositoriesGrid = () => {
	const { repos } = useGithubApi();

	return (
		<>
			{repos?.length === 0 ? (
				<S.Empty>
					{" "}
					<h2>Nenhum repositório encontrado</h2>
				</S.Empty>
			) : (
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
			)}
		</>
	);
};
