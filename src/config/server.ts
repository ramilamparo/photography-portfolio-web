if (!process.env.GATSBY_BROWSER_API_URL) {
	throw new Error("GATSBY_BROWSER_API_URL is required.");
}

export const api = process.env.GATSBY_BROWSER_API_URL;
