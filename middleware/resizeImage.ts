import sharp from "sharp"
const inputFile = "./assets/full/"
const outputFile = "./assets/thumb/"
interface ImageProperties {
    filename: string,
    width: number,
    height: number,
}
const resizeImage = async (imageData: ImageProperties): Promise<string> => {
    try {
        const dir_image_input = `${inputFile}${imageData.filename}.jpg`
        const image_output = `${imageData.filename}_thumb.jpg`
        const image_handle = sharp(dir_image_input)
        await image_handle.resize(imageData.width, imageData.height)
            .toFile(outputFile + image_output)
        return image_output
    } catch (err) {
        return "Transform image failed"
    }
}

export default {
    resizeImage
}