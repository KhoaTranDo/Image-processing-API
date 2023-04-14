import express, { Request, Response } from "express";
import resize from "./middleware/resizeImage";
const outputFile = "./assets/thumb/";
import { promises as fs } from "fs";

const app = express();
const port = 3000;

app.get("/images", async (req: Request, res: Response) => {
    try {
        const { filename, width, height } = req.query;
        const imageData = {
            filename: filename as string,
            width: parseInt(width as string),
            height: parseInt(height as string),
        };
        const imageThumbPath = await resize.resizeImage(imageData);
        const imageThumb = await fs.readFile(`${outputFile}${imageThumbPath}`);
        res.end(imageThumb);
    } catch (err) {
        res.status(400).send("Resize image failed");
    }
});

app.listen(port, () => {
    console.log("Server run port:" + port);
});

export default app;