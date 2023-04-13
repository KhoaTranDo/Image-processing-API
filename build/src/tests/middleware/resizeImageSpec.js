"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const resizeImage_1 = __importDefault(require("../../../middleware/resizeImage"));
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
        expect(function () { resizeImage_1.default.resizeImage(RightImageData); }).toThrowError();
    });
    it('Test resize invalid image', () => {
        expect(function () { resizeImage_1.default.resizeImage(WrongImageData); }).toThrowError();
    });
});
