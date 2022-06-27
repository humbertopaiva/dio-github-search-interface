import styled from "styled-components";

export const Content = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	padding: 1rem;

	& {
		@media (max-width: 912px) {
			flex-wrap: wrap;
		}
	}
`;

export const Main = styled.main`
	width: 100%;
`;

export const Aside = styled.aside`
	min-width: 300px;

	margin-right: 1rem;
	height: 100%;
	margin-bottom: 2rem;

	& {
		@media (max-width: 912px) {
			flex-wrap: wrap;
			width: 100%;

			margin-right: 0;
		}
	}
`;
