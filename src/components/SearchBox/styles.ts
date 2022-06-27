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
	}

	button {
		min-width: 100px;
		border: none;
		background-color: var(--color-primary);
		color: var(--color-gray-50);
		border-radius: 4px;
		box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

		&:hover {
			background-color: var(--color-secondary);
		}
	}
`;
