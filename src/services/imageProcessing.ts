import sharp from "sharp";

export const imageResizing = async (
	input: string,
	output: string,
	width: number,
	height: number
	// ): Promise<unknown> | Promise<sharp.OutputInfo> => {
): Promise<sharp.OutputInfo | { error: unknown }> => {
	try {
		//validate input parameters
		if (
			input.length < 1 ||
			output.length < 1 ||
			width === 0 ||
			height === 0
		) {
			throw new Error("Invalid parameters");
		}
		//return sharp.OutputInfo
		return await sharp(input).resize(width, height).toFile(output);
	} catch (error: unknown) {
		// return error if exist
		return { error };
	}
};

// export const imageResizing = async (
// 	input: string | unknown,
// 	output: string | unknown,
// 	width: number | unknown,
// 	height: number | unknown
// ): Promise<boolean> => {
// 	try {
// 		if (
// 			!input ||
// 			typeof input !== "string" ||
// 			!output ||
// 			typeof output !== "string" ||
// 			!width ||
// 			typeof width !== "number" ||
// 			!height ||
// 			typeof height !== "number"
// 		) {
// 			throw new Error("Invalid parameters");
// 		}
// 		await sharp(input as string)
// 			.withMetadata({
// 				exif: {
// 					IFD0: {
// 						Copyright: "Sherif Awad"
// 					}
// 				}
// 			})
// 			.resize(width as number, height as number)
// 			.toFile(output as string);
// 		return true;
// 	} catch (error) {
// 		return false;
// 	}
// };
