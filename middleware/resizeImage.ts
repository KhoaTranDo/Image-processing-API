import sharp from "sharp";
const inputFile = "./assets/full/";
const outputFile = "./assets/thumb/";
import fs from "fs";
interface ImageProperties {
  filename: string;
  width: number;
  height: number;
}
const resizeImage = async (imageData: ImageProperties): Promise<string> => {
  try {
    const dir_image_input = `${inputFile}${imageData.filename}.jpg`;
    const dir_image_output = `${outputFile}${imageData.filename}-${imageData.width}-${imageData.height}_thumb.jpg`;

    const image_handle = sharp(dir_image_input);
    if (!fs.existsSync(dir_image_output))
      await image_handle
        .resize(imageData.width, imageData.height)
        .toFile(dir_image_output);
    return dir_image_output;
  } catch (err) {
    throw "Transform image failed";
  }
};

export default {
  resizeImage,
};
