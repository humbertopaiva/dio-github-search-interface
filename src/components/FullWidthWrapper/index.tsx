import * as S from "./styles";

import { ReactNode } from "react";

export const FullWidthWrapper = ({ children }: { children?: ReactNode }) => {
	return (
		<S.Wrapper>
			<S.Container>{children}</S.Container>
		</S.Wrapper>
	);
};
