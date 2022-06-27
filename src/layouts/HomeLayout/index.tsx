import { useEffect, useState } from "react";
import { FullWidthWrapper } from "../../components/FullWidthWrapper";
import { RepositoriesGrid } from "../../components/RepositoriesGrid";
import { RepositoryCard } from "../../components/RespositoryCard";
import { SearchBox } from "../../components/SearchBox";
import { UserCard } from "../../components/UserCard";
import { useGithubApi } from "../../hooks/GithubApiContext";
import * as S from "./styles";
import { Pagination } from "@mantine/core";
import figure from "../../assets/figure_bg.png";

export const HomeLayout = () => {
	const { user, repos } = useGithubApi();

	return (
		<>
			<FullWidthWrapper>
				<S.Content>
					<S.Aside>
						<UserCard />
						<SearchBox />
					</S.Aside>
					<S.Main>
						{!user && (
							<S.Image>
								<img src={figure} alt="man searching at sky" />
							</S.Image>
						)}
						{repos?.length === 0 && (
							<S.Empty>
								<h2>Nenhum repositório encontrado</h2>
							</S.Empty>
						)}

						<RepositoriesGrid />
					</S.Main>
				</S.Content>
			</FullWidthWrapper>
		</>
	);
};
