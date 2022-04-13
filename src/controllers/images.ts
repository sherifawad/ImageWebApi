import { Request, Response } from "express";
import { existsSync } from "fs";
import path from "path";
import { imageResizing } from "../services/imageProcessing";

// getting all posts
const getImage = async (req: Request, res: Response) => {
	try {
		// get queries
		// const { filename, width, height } = req.query;
		//remove WhiteSpaces
		const filename = (req.query.filename as string).replace(/\s/g, "");
		const width = (req.query.width as string).replace(/\s/g, "");
		const height = (req.query.height as string).replace(/\s/g, "");

		//get source image path
		const source_path: string | undefined = path.resolve(
			`./images/full/${filename}`
		);
		//check if source image exists or throw error
		if (!existsSync(source_path)) {
			throw new Error(`Invalid input path: ${source_path}`);
		}

		//get the target image path
		//added width and height as user may need more dimensions for an image
		const target_path: string | undefined = path.resolve(
			`./images/thumb/thumb_${width}_${height}_${filename}`
		);
		//if target image exist return image
		// else continue
		if (existsSync(target_path)) {
			return res.status(200).sendFile(target_path);
		}

		// resize image service
		const result = await imageResizing(
			source_path,
			target_path,
			//parse string query to int
			parseInt(width as string),
			//parse string query to int
			parseInt(height as string)
		);

		if ("error" in result) {
			// if there are error throw
			throw result.error as Error;
		}
		//if no error return target_path
		return res.status(200).sendFile(target_path);
	} catch (error) {
		//check if instance of error not throw string but => throw new Error("")
		if (error instanceof Error) {
			return res.status(400).json({
				message: `${error.message}`
			});
		}
		//error is string
		return res.status(500).json({
			message: `${error}`
		});
	}
};

export { getImage };
