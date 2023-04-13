import sharp from "sharp"
const inputFile = "./assets/full/"
const outputFile = "./assets/thumb/"
import { promises as fs } from "fs"

interface ImageProperties {
    filename: string,
    width: number,
    height: number,
}
const resizeImage = async (imageData: ImageProperties): Promise<Buffer> => {
    try {
        const dir_image_input = `${inputFile}${imageData.filename}.jpg`
        const image_output = `${imageData.filename}_thumb.jpg`
        let image_thumb: Buffer
        const image_handle = sharp(dir_image_input)
        await image_handle.resize(imageData.width, imageData.height)
            .toFile(outputFile + image_output)
        image_thumb = await readData(image_output)
        return image_thumb
    } catch (err: any) {
        throw new Error("Resize image error")
    }
}

const readData = async (filename: string) => {
    const imageFile = await fs.readFile(`${outputFile}${filename}`)
    return imageFile
}
export default {
    resizeImage,
    readData
}