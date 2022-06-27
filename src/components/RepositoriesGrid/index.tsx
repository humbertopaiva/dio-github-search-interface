import { RepositoryCard } from "../RespositoryCard";
import * as S from "./styles";

interface RepositoriesGridProps {
	repositories: Repository[] | null;
}

export const RepositoriesGrid = ({ repositories }: RepositoriesGridProps) => {
	return (
		<S.Container>
			{repositories?.map((repo) => (
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
