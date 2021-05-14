export interface StrapiMediaFormat {
	url: string;
}

export interface StrapiMedia {
	url: string;
	formats: {
		thumbnail?: StrapiMediaFormat;
		large?: StrapiMediaFormat;
		medium?: StrapiMediaFormat;
		small?: StrapiMediaFormat;
	};
}
