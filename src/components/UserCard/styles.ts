import styled from "styled-components";

export const Container = styled.div`
	width: 100%;

	color: var(--color-gray-50);
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

	.color-dark {
		color: var(--color-primary);
		filter: brightness(1.5);
	}
`;

export const Content = styled.div`
	min-height: 450px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 2rem;
	border-radius: 4px;
	background-color: var(--color-primary);
	background: linear-gradient(
		140deg,
		rgba(110, 84, 148, 1) 0%,
		rgba(66, 44, 98, 1) 100%
	);
`;

export const Username = styled.div`
	color: var(--color-gray-50);
	width: 100%;
	max-width: 300px;

	text-align: center;

	h2 {
		font-size: 2rem;
		line-height: 2rem;
		margin: 1rem 0;
	}

	h3 {
		margin-top: 1rem;
	}
`;

export const Infos = styled.div`
	width: 100%;
	max-width: 300px;
	display: flex;
	justify-content: space-around;
	margin: 0.75rem 0;
	color: var(--color-gray-100);

	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 1rem;

		h4 {
			font-size: 1rem;
			font-weight: 500;
		}

		span {
			font-size: 14px;
		}
	}
`;

export const Image = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;

	div {
		width: 180px;
		height: 180px;
		border-radius: 50%;
		overflow: hidden;
		background-color: var(--color-primary);
		filter: brightness(1.2);
		border: 6px solid var(--color-gray-50);
	}

	img {
		object-fit: cover;
		width: 100%;
	}
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
