import resizeImage from "../../../middleware/resizeImage";

describe("Test transform image", () => {
  const outputFile = "./assets/thumb/";
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

  it("Test transform image already exist", async () => {
    const dir_image_output = `${outputFile}${passImageData.filename}-${passImageData.width}-${passImageData.height}_thumb.jpg`;
    const imagePath = await resizeImage.resizeImage(passImageData);
    expect(imagePath).toEqual(dir_image_output);
  });

  it("Test transform image does not exist", () => {
    return resizeImage.resizeImage(failImageData).catch((error) => {
      expect(error).toEqual("Transform image failed");
    });
  });
});
