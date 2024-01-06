const User = require("../model/user");
const { sendResponse, parseBody } = require("../util/commonFunction");

export const handler = async (event: any) => {
  try {
    parseBody(event);
    const { name, age, occupation, gender } = event.body;

    if (!name || !age || !occupation || !gender)
      return sendResponse(400, {
        message: "name/age/occupation/gender cannot be empty",
      });

    const userDetail = await User.findOne({ name, occupation });

    if (userDetail)
      return sendResponse(400, {
        message: "user already exists",
      });

    const newUser = await User.create({ name, age, occupation, gender });

    return sendResponse(200, {
      message: "success",
      user: newUser,
    });
  } catch (error) {
    console.error(error);
    return sendResponse(500, {
      message: "something went wrong",
    });
  }
};
