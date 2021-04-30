import React from "react";
import type { ReactElement } from "react";
import type { PageProps } from "gatsby";
import { createGlobalStyle } from "styled-components";
import { NavBarContent } from "../container/NavBarContent";

const GlobalStyle = createGlobalStyle`
	*,
	*::after,
	*::before {
		margin: 0;
		padding: 0;
		box-sizing: inherit;
	}

	html {
		font-size: 62.5%;
		background-color: black;
	}

	body {
		font-family: Work Sans;
		box-sizing: border-box;
	}
`;

const PageContainer = ({ children }: PageProps): ReactElement => {
	return (
		<>
			<GlobalStyle />
			<NavBarContent>{children}</NavBarContent>
		</>
	);
};

export default PageContainer;
