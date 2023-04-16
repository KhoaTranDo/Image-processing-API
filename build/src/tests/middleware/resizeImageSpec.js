"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const resizeImage_1 = __importDefault(require("../../../middleware/resizeImage"));
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
    it("Test transform image already exist", () => __awaiter(void 0, void 0, void 0, function* () {
        const dir_image_output = `${outputFile}${passImageData.filename}-${passImageData.width}-${passImageData.height}_thumb.jpg`;
        const imagePath = yield resizeImage_1.default.resizeImage(passImageData);
        expect(imagePath).toEqual(dir_image_output);
    }));
    it("Test transform image does not exist", () => {
        return resizeImage_1.default.resizeImage(failImageData).catch((error) => {
            expect(error).toEqual("Transform image failed");
        });
    });
});
