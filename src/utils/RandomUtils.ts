export abstract class RandomUtils {
	public static generateRandomNumberBetween = (min: number, max: number) => {
		return Math.floor(Math.random() * (max - min + 1) + min);
	};

	public static getRandomElement = <T>(array: Array<T>) => {
		const randomIndex = RandomUtils.generateRandomNumberBetween(
			0,
			array.length - 1
		);

		return array[randomIndex];
	};
}
