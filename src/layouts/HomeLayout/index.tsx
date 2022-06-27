import { useEffect, useState } from "react";
import { FullWidthWrapper } from "../../components/FullWidthWrapper";
import { RepositoriesGrid } from "../../components/RepositoriesGrid";
import { RepositoryCard } from "../../components/RespositoryCard";
import { SearchBox } from "../../components/SearchBox";
import { UserCard } from "../../components/UserCard";
import { useGithubApi } from "../../hooks/GithubApiContext";
import * as S from "./styles";
import { Pagination } from "@mantine/core";

export const HomeLayout = () => {
	const { repos } = useGithubApi();
	const [repositories, setRepositories] = useState<Repository[]>([]);

	useEffect(() => {
		if (repos) setRepositories(repos);
	}, [repos]);

	return (
		<>
			<FullWidthWrapper>
				<S.Content>
					<S.Aside>
						<UserCard />
						<SearchBox />
					</S.Aside>
					<S.Main>
						<RepositoriesGrid repositories={repositories} />
					</S.Main>
				</S.Content>
			</FullWidthWrapper>
		</>
	);
};
