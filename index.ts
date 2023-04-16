import express, { Request, Response } from "express";
import resize from "./middleware/resizeImage";
const inputFile = "./assets/full/";
import fs from "fs";

const app = express();
const port = 3000;

app.get("/images", async (req: Request, res: Response) => {
  try {
    const { filename, width, height } = req.query;
    if (!width) {
      throw "Missing width";
    }
    if (!filename) {
      throw "Missing filename";
    }
    if (!height) {
      throw "Missing height";
    }
    if (isNaN(Number(width)) || Number(width) < 0) {
      throw "Invalid width data";
    }
    if (isNaN(Number(height)) || Number(height) < 0) {
      throw "Invalid height data";
    }
    const imageData = {
      filename: filename as string,
      width: parseInt(width as string),
      height: parseInt(height as string),
    };
    if (fs.existsSync(`${inputFile}${filename}.jpg`))
      await resize
        .resizeImage(imageData)
        .then((data) => {
          fs.readFile(data, (err, data) => {
            if (err) {
              res.status(400).send("Read file transform failed");
            }
            res.end(data);
          });
        })
        .catch((err) => {
          res.status(400).end(err);
        });
    else throw "Original image not found";
  } catch (err) {
    res.status(400).end(err);
  }
});

app.listen(port, () => {
  console.log("Server run port:" + port);
});

export default app;