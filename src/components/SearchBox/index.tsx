import { FullWidthWrapper } from "../FullWidthWrapper";
import * as S from "./styles";

export const SearchBox = () => {
	return (
		<S.Container>
			<S.Content>
				<input type="text" placeholder="Search user by username" />
			</S.Content>
		</S.Container>
	);
};
