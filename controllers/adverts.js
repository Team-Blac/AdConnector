import { AdvertModel } from "../models/advert.js";
import { advertValidator } from "../validators/advert.js";
import { sendEmail } from "../utils/mailing.js";
import { UserModel } from "../models/user.js";

export const createAdvert = async (req, res, next) => {
  try {
    // Validate incoming user data
    const { error, value } = advertValidator.validate({
      ...req.body,
      pictures: req.files?.map((file) => {
        return file.filename;
      }),
    });

    if (error) {
      return res.status(400).json(error);
    }

    const user = await AdvertModel.create({ ...value, userId: req.auth.id });

    const newUser = await UserModel.findById(user.userId);

    //confirmation message
    await sendEmail(
      newUser.email,
      "Advert sucessfully added at Adconnector",
      `
    <h1>Congratulations on Your New Ad!</h1>
    <p>Hello <strong>${newUser.userName}</strong>,</p>
    <p>Your ad has been successfully created and is now live! 🚀</p>
    <p>Reach more customers and grow your business with us:</p>
    <a href="https://adconnector.com/your-ads" 
       style="display:inline-block; padding:10px 20px; background-color:#28a745; color:white; text-decoration:none; border-radius:5px;">
       View Your Ad
    </a>
    <p>We wish you great success with your advertising journey! 🎯</p>
    <hr>
    <small>If you didn't create this ad, please contact our support team immediately.</small>
`
    );

    res.status(201).json({ message: "Advert successfully created." });
  } catch (error) {
    next(error);
  }
};

export const getAdverts = async (req, res, next) => {
  try {
    const { filter = "{}", sort = "{}" } = req.query;
    // Fetch products from database
    const result = await AdvertModel.find(JSON.parse(filter)).sort(
      JSON.parse(sort)
    );
    // Return response`
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const getAdvert = async (req, res) => {
  try {
    const { id } = req.params;

    const advert = await AdvertModel.findById(id);

    if (!advert) {
      return res.status(404).json("Advert not found");
    }

    return res.status(200).json(advert);
  } catch (error) {
    next(error);
  }
};

export const deleteAdvert = async (req, res) => {
  try {
    const { id } = req.params;

    const advert = await AdvertModel.findByIdAndDelete(id);

    if (!advert) {
      return res.status(404).json("Advert not found.");
    }

    return res.status(200).json("Advert successfully deleted!");
  } catch (error) {
    next(error);
  }
};

export const updateAdvert = async (req, res) => {
  try {
    const advertId = req.params.id;

    const advert = await AdvertModel.findByIdAndUpdate(advertId, req.body, {
      new: true,
    });

    if (!advert) {
      return res.status(404).json("Advert not found.");
    }

    return res.status(200).json("Advert successfully updated.");
  } catch (error) {
    next(error);
  }
};
