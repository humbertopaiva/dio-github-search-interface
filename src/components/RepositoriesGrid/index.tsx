import { Spinner } from "@chakra-ui/react";
import { useGithubApi } from "../../hooks/GithubApiContext";
import { RepositoryCard } from "../RespositoryCard";
import * as S from "./styles";

export const RepositoriesGrid = () => {
	const { repos, isLoading } = useGithubApi();

	return (
		<>
			{isLoading && <Spinner />}

			{repos?.length === 0 && !isLoading && (
				<S.Empty>
					<h2>Nenhum repositório encontrado</h2>
				</S.Empty>
			)}

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
		</>
	);
};
