import supertest from "supertest";
import app from "../..";

const req = supertest(app);

describe("Test endpoints", () => {
	it("No root endpoint", async () => {
		const result = await req.get("/");
		expect(result.status).toBe(404);
	});

	it("Main api endpoint", async () => {
		const result = await req.get("/api");
		expect(result.status).toBe(200);
	});
});
