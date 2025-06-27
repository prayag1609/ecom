import { v2 as cloudinary } from "cloudinary";
const cloud_name = process.env.CLOUD_NAME
const cloud_api_key = process.env.CLOUD_API_KEY;
const cloud_api_secret = process.env.CLOUD_SECRET;
cloudinary.config({
    cloud_name: cloud_name,
    api_key:cloud_api_key,
    api_secret: cloud_api_secret 
});
export default cloudinary;