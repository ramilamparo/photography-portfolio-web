import React from "react";
import type { ReactElement } from "react";
import type { PageProps } from "gatsby";

const PageContainer = ({ children }: PageProps): ReactElement => {
	return <>{children}</>;
};

export default PageContainer;
