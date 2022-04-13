import supertest from "supertest";
import app from "../..";

describe("Test Images endpoint validation", () => {
	const width = "200";
	const height = "200";
	const fileName = "1028.png";
	const request = supertest(app);

	describe("fileName errors", () => {
		it("filename is not exist", async () => {
			await request
				.get(`/api/images?filename=&width=${width}&height=${height}`)
				.expect(400, {
					value: "",
					msg: "query filename is empty or white space",
					param: "filename",
					location: "query"
				});
		});

		it("filename is white space", async () => {
			await request
				.get(`/api/images?filename= &width=${width}&height=${height}`)
				.expect(400, {
					value: " ",
					msg: "query filename is empty or white space",
					param: "filename",
					location: "query"
				});
		});
	});

	describe("width errors", () => {
		it("width not exist", async () => {
			await request
				.get(`/api/images?filename=${fileName}&width=&height=${height}`)
				.expect(400, {
					value: "",
					msg: "query width should be a number",
					param: "width",
					location: "query"
				});
		});

		it("width is white space", async () => {
			await request
				.get(
					`/api/images?filename=${fileName}&width= &height=${height}`
				)
				.expect(400, {
					value: " ",
					msg: "query width should be a number",
					param: "width",
					location: "query"
				});
		});

		it("width is not only numbers", async () => {
			await request
				.get(
					`/api/images?filename=${fileName}&width=+200&height=${height}`
				)
				.expect(400, {
					value: " 200",
					msg: "query width should be a number",
					param: "width",
					location: "query"
				});
		});
	});

	describe("height errors", () => {
		it("height not exist", async () => {
			await request
				.get(`/api/images?filename=${fileName}&width=${width}&height=`)
				.expect(400, {
					value: "",
					msg: "query height should be a number",
					param: "height",
					location: "query"
				});
		});

		it("height is white space", async () => {
			await request
				.get(`/api/images?filename=${fileName}&height= &width=${width}`)
				.expect(400, {
					value: " ",
					msg: "query height should be a number",
					param: "height",
					location: "query"
				});
		});

		it("height is not only numbers", async () => {
			await request
				.get(
					`/api/images?filename=${fileName}&width=${width}&height=+200`
				)
				.expect(400, {
					value: " 200",
					msg: "query height should be a number",
					param: "height",
					location: "query"
				});
		});
	});

	describe("Test Images endpoint with valid inputs", () => {
		it("get images api end point", async () => {
			await request
				.get(
					`/api/images?filename=${fileName}&width=${width}&height=${height}`
				)
				.expect(200);
		});
	});
});
