import userModel from "../models/user_model.js";

export const test = (req, res) => {
  res.json({
    message: "APi route is working !",
  });
};
