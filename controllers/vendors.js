import { UserModel } from "../models/user_model.js";
import { vendorValidator } from "../validators/vendor.js";

export const createAdvert = async(req,res,next) => {
    try {
        // Validate incoming user data
        const {error,value} = vendorValidator.validate(req.body);
    
        if(error)
        {
            return res.status(400).json(error);
        }
    
        const user = await UserModel.create(value);
        res.status(201).json({message: 'User successfully created.'})
    } catch (error) {
        next(error);
    }
    
}

export const getAdverts = async(req,res,next) => {
    try {
        const users = await UserModel.find();
    
        return res.status(200).json(users);
    } catch (error) {
        next(error);
    }
}

export const getAdvert = async(req,res) => {
    try {
        const {id} = req.params;
    
        const advert = await UserModel.findById(id);
    
        if(!advert)
        {
            return res.status(404).json('Advert not found');
        }
    
        return res.status(200).json(advert);
    } catch (error) {
        next(error);
    }
}

export const deleteAdvert = async(req,res) => {
    try {
        const {id} = req.params;
    
        const advert = await UserModel.findByIdAndDelete(id);
    
        if(!advert)
        {
            return res.status(404).json('Advert not found.');
        }
    
        return res.status(200).json('Advert successfully deleted!');
    } catch (error) {
        next(error);
    }

}

export const updateAdvert = async(req,res) => {
    try {
        const advertId = req.params.id;
    
        const advert = await UserModel.findByIdAndUpdate(advertId,req.body,{new:true});
    
        if(!advert)
        {
            return res.status(404).json('Advert not found.');
        }
    
        return res.status(200).json('Advert successfully updated.');
    } catch (error) {
        next(error);
    }

}