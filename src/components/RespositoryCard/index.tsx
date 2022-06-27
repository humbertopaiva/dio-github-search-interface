import { FullWidthWrapper } from "../FullWidthWrapper";
import * as S from "./styles";

interface RepositoryCardProps {
	title?: string;
	description?: string;
	url?: string;
}

export const RepositoryCard = ({
	title = "Título do card",
	description = "Descrição top do projeto blablaba blablabab lablabab	lablababl ablabablablaba blabl abablabl abablablaba",
	url = "www.google.com",
}: RepositoryCardProps) => {
	return (
		<S.Container>
			<S.Content>
				<S.Title>{title}</S.Title>
				<S.Description>{description}</S.Description>
				<S.Link>
					<a href={url} target="_blank">
						Acesse o projeto
					</a>
				</S.Link>
			</S.Content>
		</S.Container>
	);
};
