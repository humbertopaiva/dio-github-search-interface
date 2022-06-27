import styled from "styled-components";

export const Container = styled.section`
	height: 100%;
	width: 100%;
	display: grid;
	grid-template-columns: repeat(3, minmax(250px, max-content));

	& {
		@media (max-width: 1200px) {
			grid-template-columns: repeat(2, minmax(250px, max-content));
		}

		@media (max-width: 600px) {
			grid-template-columns: repeat(1, minmax(250px, max-content));
		}
	}

	gap: 10px;
`;

export const Empty = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;
