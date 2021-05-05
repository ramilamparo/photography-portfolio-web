import { createContext } from "react";

export interface NavBarContentContextProps {
	navbar: HTMLDivElement | null;
}

export const NavBarContentContext = createContext<NavBarContentContextProps>({
	navbar: null
});

export const NavBarContentContextProvider = NavBarContentContext.Provider;

export const NavBarContentContextConsumer = NavBarContentContext.Consumer;
