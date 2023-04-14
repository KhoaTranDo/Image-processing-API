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
const sharp_1 = __importDefault(require("sharp"));
const inputFile = "./assets/full/";
const outputFile = "./assets/thumb/";
const resizeImage = (imageData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dir_image_input = `${inputFile}${imageData.filename}.jpg`;
        const image_output = `${imageData.filename}_thumb.jpg`;
        const image_handle = (0, sharp_1.default)(dir_image_input);
        yield image_handle.resize(imageData.width, imageData.height)
            .toFile(outputFile + image_output);
        return image_output;
    }
    catch (err) {
        return "Transform image failed";
    }
});
exports.default = {
    resizeImage
};
