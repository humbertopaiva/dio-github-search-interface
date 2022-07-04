import { FullWidthWrapper } from "../FullWidthWrapper";
import * as S from "./styles";

interface RepositoryCardProps {
	title?: string;
	description?: string;
	url?: string;
}

export const RepositoryCard = ({ title, url }: RepositoryCardProps) => {
	return (
		<S.Container>
			<S.Content>
				<S.Title>{title}</S.Title>
				<S.Link>
					<a href={url} target="_blank">
						Acesse o projeto
					</a>
				</S.Link>
			</S.Content>
		</S.Container>
	);
};
