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
const inputFile = "./assets/full/";
const fs_1 = __importDefault(require("fs"));
const app = (0, express_1.default)();
const port = 3000;
app.get("/images", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { filename, width, height } = req.query;
        if (!width) {
            throw "Missing width";
        }
        if (!filename) {
            throw "Missing filename";
        }
        if (!height) {
            throw "Missing height";
        }
        if (isNaN(Number(width)) || Number(width) < 0) {
            throw "Invalid width data";
        }
        if (isNaN(Number(height)) || Number(height) < 0) {
            throw "Invalid height data";
        }
        const imageData = {
            filename: filename,
            width: parseInt(width),
            height: parseInt(height),
        };
        if (fs_1.default.existsSync(`${inputFile}${filename}.jpg`))
            yield resizeImage_1.default
                .resizeImage(imageData)
                .then((data) => {
                fs_1.default.readFile(data, (err, data) => {
                    if (err) {
                        res.status(400).send("Read file transform failed");
                    }
                    res.end(data);
                });
            })
                .catch((err) => {
                res.status(400).end(err);
            });
        else
            throw "Original image not found";
    }
    catch (err) {
        res.status(400).end(err);
    }
}));
app.listen(port, () => {
    console.log("Server run port:" + port);
});
exports.default = app;
