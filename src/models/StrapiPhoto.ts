import * as faker from "faker";
import { api } from "../config/server";
import { StrapiMedia } from "../typings/Strapi";
import { RandomUtils } from "../utils/RandomUtils";

export interface StrapiPhotoAttributes {
	original: string;
	alt: string;
	large?: string;
	medium?: string;
	small?: string;
	thumbnail?: string;
}

export class StrapiPhoto implements StrapiPhotoAttributes {
	public original: string;
	public alt: string;
	public large?: string;
	public medium?: string;
	public small?: string;
	public thumbnail?: string;

	private constructor(attributes: StrapiPhotoAttributes) {
		this.original = attributes.original;
		this.alt = attributes.alt;
		this.large = attributes.large;
		this.medium = attributes.medium;
		this.small = attributes.small;
		this.thumbnail = attributes.thumbnail;
	}

	public static getRandom = (): StrapiPhoto => {
		const sizes = [
			[1080, 566],
			[1080, 1350],
			[1080, 1080]
		];

		const sizeIndex = RandomUtils.generateRandomNumberBetween(0, 2);

		const [x, y] = sizes[sizeIndex];

		return StrapiPhoto.fromObject({
			original: `${faker.image.nature(x, y)}`,
			alt: faker.lorem.text()
		});
	};

	public static fromObject = (attributes: StrapiPhotoAttributes) => {
		return new StrapiPhoto(attributes);
	};

	public static fromStrapiMedia = (alt: string, attributes: StrapiMedia) => {
		const { url, formats } = attributes;
		const { large, medium, thumbnail, small } = formats;
		return new StrapiPhoto({
			alt: StrapiPhoto.prependServerHost(alt),
			original: StrapiPhoto.prependServerHost(url),
			large: large && StrapiPhoto.prependServerHost(large.url),
			medium: medium && StrapiPhoto.prependServerHost(medium.url),
			small: small && StrapiPhoto.prependServerHost(small.url),
			thumbnail: thumbnail && StrapiPhoto.prependServerHost(thumbnail.url)
		});
	};

	private static prependServerHost = (path: string) => {
		return `${api}${path}`;
	};
}
