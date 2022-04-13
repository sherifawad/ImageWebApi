import path from "path";
import { existsSync } from "fs";

describe("Tes Controller", async () => {
	it(" input file exist", () => {
		const source_path = path.resolve("./images/full/1028.png");
		const result = existsSync(source_path);
		expect(result).toBeTruthy();
	});
});
