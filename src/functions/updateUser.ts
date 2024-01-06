const User = require("../model/user");
const { sendResponse } = require("../util/commonFunction");

interface UpdateObject {
  name?: string;
  age?: number;
  occupation?: string;
  gender?: string;
}

export const handler = async (event: any) => {
  try {
    const { user_id, name, age, occupation, gender } = JSON.parse(event.body);
    if (!user_id)
      return sendResponse(400, { message: "user id cannot be empty" });

    const updateObj: UpdateObject = {};

    if (name) updateObj.name = name;
    if (age) updateObj.age = age;
    if (occupation) updateObj.occupation = occupation;
    if (gender) updateObj.gender = gender;

    const updatedUser = await User.findByIdAndUpdate(user_id, updateObj, {
      new: true,
    });

    if (!updatedUser) return sendResponse(400, { message: "invalid user" });

    return sendResponse(200, { message: "success", user: updatedUser });
  } catch (error) {
    console.error(error);
    return sendResponse(500, { message: "something went wrong" });
  }
};
