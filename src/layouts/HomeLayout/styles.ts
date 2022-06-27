import styled from "styled-components";

export const Content = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	padding: 2rem 1rem;
	position: relative;

	& {
		@media (max-width: 912px) {
			flex-wrap: wrap;
		}
	}
`;

export const Main = styled.main`
	width: 100%;
`;

export const Image = styled.div`
	display: flex;
	justify-content: center;
	height: 100%;

	img {
		width: 75%;
		object-fit: contain;
		margin: 0 auto;
	}

	& {
		@media (max-width: 912px) {
			display: none;
		}
	}
`;

export const Empty = styled.div`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
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

		@media (min-width: 1200) {
			position: sticky;
			top: 0;
		}
	}
`;
