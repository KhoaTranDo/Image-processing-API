import resizeImage from "../../../middleware/resizeImage";

describe("Test transform image", () => {
    const passImageData = {
        filename: "cropland",
        width: 200,
        height: 200,
    };
    const failImageData = {
        filename: "iceLand",
        width: 200,
        height: 200,
    };

    it('Test transform image already exist', async () => {
        const imagePath = await resizeImage.resizeImage(passImageData)
        expect(imagePath).toEqual(`${passImageData.filename}_thumb.jpg`);
    });

    it('Test transform image does not exist', async () => {
        const imagePath = await resizeImage.resizeImage(failImageData)
        expect(imagePath).toEqual("Transform image failed");
    });
})