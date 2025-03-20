import multer from "multer";
import { multerSaveFilesOrg} from "multer-savefilesorg";



export const advertPicturesUpload = multer({
    storage: multerSaveFilesOrg({
       apiAccessToken: process.env.SAVEFILESORG_API_KEY,
       relativePath: '/adconnector-api/advert-products*' 
    })
})