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
const express_1 = __importDefault(require("express"));
const resizeImage_1 = __importDefault(require("./middleware/resizeImage"));
const outputFile = "./assets/thumb/";
const fs_1 = require("fs");
const app = (0, express_1.default)();
const port = 3000;
app.get("/images", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { filename, width, height } = req.query;
        const imageData = {
            filename: filename,
            width: parseInt(width),
            height: parseInt(height),
        };
        const imageThumbPath = yield resizeImage_1.default.resizeImage(imageData);
        const imageThumb = yield fs_1.promises.readFile(`${outputFile}${imageThumbPath}`);
        res.end(imageThumb);
    }
    catch (err) {
        res.status(400).send("Transform image failed");
    }
}));
app.listen(port, () => {
    console.log("Server run port:" + port);
});
exports.default = app;
