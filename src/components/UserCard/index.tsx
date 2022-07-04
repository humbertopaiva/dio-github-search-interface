import { useState } from "react";
import { useGithubApi } from "../../hooks/GithubApiContext";
import { FullWidthWrapper } from "../FullWidthWrapper";
import * as S from "./styles";

export const UserCard = () => {
	const { user } = useGithubApi();

	return (
		<S.Container>
			<S.Content>
				<S.Image>
					<div>
						<img
							alt={user ? user.login : "github logo"}
							src={
								user
									? user.avatar_url
									: "https://cdn-icons-png.flaticon.com/512/25/25231.png"
							}
						/>
					</div>
				</S.Image>
				<S.Username>
					{user ? (
						<>
							<h2>{user?.name}</h2>
							<a
								href={`https://github.com/${user.login}`}
								target="_blank"
							>
								@{user?.login}
							</a>
						</>
					) : (
						<h3>
							Pesquise por um usuário do Github no campo de
							pesquisa abaixo
						</h3>
					)}
				</S.Username>
				{user && (
					<S.Infos className="color-dark">
						<div>
							<h4>Followers</h4>
							<span>{user?.followers}</span>
						</div>
						<div>
							<h4>Following</h4>
							<span>{user?.following}</span>
						</div>
						<div>
							<h4>Gists</h4>
							<span>{user?.public_gists}</span>
						</div>
					</S.Infos>
				)}
			</S.Content>
		</S.Container>
	);
};
