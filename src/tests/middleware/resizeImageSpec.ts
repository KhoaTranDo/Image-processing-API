import resizeImage from "../../../middleware/resizeImage";

describe("Test resize image", () => {
    const RightImageData = {
        filename: "cropland",
        width: 200,
        height: 200,
    };
    const WrongImageData = {
        filename: "iceLand",
        width: 200,
        height: 200,
    };

    it('Test resize valid image', () => {
        expect(function() {resizeImage.resizeImage(RightImageData)}).toThrowError();
    });

    it('Test resize invalid image', () => {
        expect(function() {resizeImage.resizeImage(WrongImageData)}).toThrowError();
    });
})