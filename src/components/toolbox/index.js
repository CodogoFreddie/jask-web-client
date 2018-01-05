import styled, { injectGlobal } from "styled-components";
injectGlobal`
	html {
		font-size: 8px;
	}

	body {
		font-size: 2rem;
	}

	html, body, #root {
		margin: 0;
		min-height: 100%;
		height: 100%;
	}

	#root {
		display: flex;
		flex-direction: column;
	}
`;

export const Input = styled.input`

`;

export const Modal = styled.div`
	align-items: center;
	box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
	display: flex;
	flex: 1;
	flex-direction: column;
	justify-content: center;
	margin: 2rem;
`;

export const Button = styled.button`

`;
