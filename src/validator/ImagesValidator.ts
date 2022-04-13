import { query } from "express-validator";

// route image validator
export const ImagesValidator = {
	//validate get with query parameters
	checkReadImage: [
		query("filename")
			// if only white space throw error
			.notEmpty({ ignore_whitespace: true })
			.withMessage("query filename is empty or white space"),
		query("width")
			//throw error for symbols like + -
			.isNumeric({ no_symbols: true })
			.withMessage("query width should be a number"),
		query("height")
			//throw error for symbols like + -
			.isNumeric({ no_symbols: true })
			.withMessage("query height should be a number")
	]
};
