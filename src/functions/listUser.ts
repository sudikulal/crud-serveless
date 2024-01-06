const User = require("../model/user");
const { sendResponse } = require("../util/commonFunction");

export const handler = async (event: any) => {
  try {
    const users = await User.find();
    return sendResponse(200, { message: "success", user: users });
  } catch (error) {
    console.error(error);
    return sendResponse(500, { message: "something went wrong" });
  }
};
