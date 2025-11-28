import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";
import { Env } from "./evn_config"; // your env variables

// Cloudinary configuration
cloudinary.config({
  cloud_name: Env.CLOUDINARY_CLOUD_NAME,
  api_key: Env.CLOUDINARY_API_KEY,
  api_secret: Env.CLOUDINARY_API_SECRET,
});

// Storage params for Cloudinary
const STORAGE_PARAMS = {
  folder: "receipts", // folder in Cloudinary
  allowed_formats: ["jpg", "jpeg", "png"],
  resource_type: "image" as const,
  quality: "auto:good" as const,
};

// Multer storage
const storage = new CloudinaryStorage({
  cloudinary,
  params: (req, file) => ({
    ...STORAGE_PARAMS,
    public_id: `${Date.now()}-${file.originalname}`, // unique file name
  }),
});

// Multer upload
export const upload = multer({
  storage,
  limits: { fileSize: 2 * 1024 * 1024, files: 1 }, // 2MB max
  fileFilter: (_, file, cb) => {
    console.log("came to cloudinary");
    const isValid = /^image\/(jpe?g|png)$/.test(file.mimetype);
    if (isValid) {
      cb(null, true);
      console.log("done");
    } else {
      cb(new Error("Only JPG, JPEG, PNG files are allowed"));
    }
  },
});
