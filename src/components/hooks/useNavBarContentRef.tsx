import { useContext } from "react";
import { NavBarContentContext } from "../presentational/NavBar/NavBarContentContext";

export const useNavBarContentRef = () => {
	const context = useContext(NavBarContentContext);

	return {
		ref: context.contentEl
	};
};
