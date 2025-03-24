import multer from "multer";
import {v2 as cloudinary} from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { multerSaveFilesOrg} from "multer-savefilesorg";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});




export const advertPicturesUpload = multer({
    storage: new CloudinaryStorage({
        cloudinary,
        params: {
            folder: 'adconnector/adverts/pictures',             
        }
    })
    
})





// export const advertPicturesUpload = multer({
//     storage: multerSaveFilesOrg({
//        apiAccessToken: process.env.SAVEFILESORG_API_KEY,
//        relativePath: '/adconnector-api/advert-products/*' 
//     })
// })