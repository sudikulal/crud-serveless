const User = require("../model/user");
const { sendResponse } = require("../util/commonFunction");

export const handler = async (event: any) => {
  try {
    const { user_id } = JSON.parse(event.body);

    if (!user_id)
      return sendResponse(400, { message: "user id cannot be empty" });

    const deleteddUser = await User.findByIdAndRemove(user_id);

    if (!deleteddUser) return sendResponse(400, { message: "invalid user" });

    return sendResponse(200, { message: "success", user: deleteddUser });
  } catch (error) {
    console.error(error);
    return sendResponse(500, { message: "something went wrong" });
  }
};
