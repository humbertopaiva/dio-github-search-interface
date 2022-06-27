import styled from "styled-components";

export const Container = styled.div`
	margin-top: 0.75rem;
	width: 100%;
	background-color: var(--color-gray-100);
`;

export const Content = styled.div`
	display: flex;

	input {
		height: 100%;
		flex: 1;
		padding: 0.75rem 1rem;
		background-color: var(--color-white);
		border: none;
		border-radius: 4px;

		border: 2px solid var(--color-primary-accent);

		&:focus {
			outline: none;
			box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
		}

		&.error {
			border: 2px solid red;
			color: red;
		}
	}

	.clear-button {
		background-color: var(--color-secondary);
		color: var(--color-gray-50);
	}
`;

export const SearchButton = styled.button`
	padding: 0 1rem;
	font-size: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	border: none;
	background-color: var(--color-primary);
	color: var(--color-gray-50);
	border-radius: 4px;
	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
	margin-left: 0.5rem;

	&:hover {
		background-color: var(--color-secondary);
	}
`;
