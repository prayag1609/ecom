"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinary_1 = require("cloudinary");
const cloud_name = process.env.CLOUD_NAME;
const cloud_api_key = process.env.CLOUD_API_KEY;
const cloud_api_secret = process.env.CLOUD_SECRET;
cloudinary_1.v2.config({
    cloud_name: cloud_name,
    api_key: cloud_api_key,
    api_secret: cloud_api_secret
});
exports.default = cloudinary_1.v2;
