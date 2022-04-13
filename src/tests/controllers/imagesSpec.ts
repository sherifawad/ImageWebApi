import path from "path";
import { existsSync } from "fs";

describe("Tes Controller", async () => {
	it(" input file exist", () => {
		const sourcePath = path.resolve("./images/full/1028.png");
		const result = existsSync(sourcePath);
		expect(result).toBeTruthy();
	});
});
