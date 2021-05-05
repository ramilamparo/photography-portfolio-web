import { createContext } from "react";

export interface NavBarContentContextProps {
	contentEl: HTMLDivElement | null;
}

export const NavBarContentContext = createContext<NavBarContentContextProps>({
	contentEl: null
});

export const NavBarContentContextProvider = NavBarContentContext.Provider;

export const NavBarContentContextConsumer = NavBarContentContext.Consumer;
