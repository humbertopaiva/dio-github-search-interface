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
						<img alt={user?.login} src={user?.avatar_url} />
					</div>
				</S.Image>
				<S.Username>
					<h2>{user?.name}</h2>
					<h3 className="color-dark">@{user?.login}</h3>
				</S.Username>
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
			</S.Content>
		</S.Container>
	);
};
