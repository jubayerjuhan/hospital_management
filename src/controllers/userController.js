import User from "../models/userModel.js";

export const createUser = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    next(error);
  }
};
