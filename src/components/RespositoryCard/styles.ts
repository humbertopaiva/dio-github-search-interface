import styled from "styled-components";

export const Container = styled.article`
	width: 100%;
	height: 150px;
	border: 3px solid var(--color-primary);
	border-radius: 4px;
	padding: 1rem;
	background-color: var(--color-white);

	&:hover {
		box-shadow: rgba(240, 46, 170, 0.2) -5px 5px,
			rgba(240, 46, 170, 0.1) -10px 10px,
			rgba(240, 46, 170, 0.05) -15px 15px;

		border: 3px solid var(--color-primary-accent);
	}
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
`;

export const Title = styled.h3`
	font-weight: 700;
	font-size: 1.25rem;
	color: var(--color-primary);
	margin-bottom: 0.25rem;
`;

export const Description = styled.p`
	width: 100%;
	font-size: 0.8rem;
	white-space: nowrap; /* Removendo quebra de linha */
	overflow: hidden; /* Removendo a barra de rolagem */
	text-overflow: ellipsis; /* Adicionando "..." ao final do texto */
	line-clamp: 2;
	height: 100%;
	margin-bottom: 1rem;
`;

export const Link = styled.div`
	height: 100%;
	display: flex;
	align-items: flex-end;

	font-weight: 600;

	a {
		text-decoration: none;
		color: var(--color-primary-accent);
		cursor: pointer;
	}
`;
