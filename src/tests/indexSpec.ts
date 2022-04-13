describe("Test", () => {
	it("Server port exist", () => {
		const Port = process.env.PORT ?? 7010;
		expect(Port).toBe(7010);
	});
});
