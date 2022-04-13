import path from "path";
import { imageResizing } from "../../services/imageProcessing";

describe("Test sharp service", () => {
	const filename = "1028.png";
	const input = path.resolve(`./images/full/${filename}`);
	const output: string = path.resolve(`./images/thumb/${filename}`);
	const width: number = 200;
	const height: number = 200;

	describe("Test image processing service when", () => {
		it("Resolve error", async () => {
			const result = async () =>
				await imageResizing("", output, width, height);
			await expectAsync(result()).toBeResolved();
		});

		it("input is white space", async () => {
			const result = await imageResizing(" ", output, 0, height);
			expect(
				(
					(
						result as {
							error: unknown;
						}
					).error as Error
				).message
			).toBe("Invalid parameters");
		});

		it("output is white space", async () => {
			const result = await imageResizing(input, " ", 0, height);
			expect(
				(
					(
						result as {
							error: unknown;
						}
					).error as Error
				).message
			).toBe("Invalid parameters");
		});

		it("width is zero", async () => {
			const result = await imageResizing(input, output, 0, height);
			expect(
				(
					(
						result as {
							error: unknown;
						}
					).error as Error
				).message
			).toBe("Invalid parameters");
		});

		it("height is zero", async () => {
			const result = await imageResizing(input, output, width, 0);
			expect(
				(
					(
						result as {
							error: unknown;
						}
					).error as Error
				).message
			).toBe("Invalid parameters");
		});

		it("Result exist", async () => {
			const result = await imageResizing(input, output, width, height);
			expect(result).toBeTruthy();
		});
	});
});
