const updateUser = require("../../functions/updateUser");

exports.shouldUpdate = async (userId: String) => {
  const updatedUser = {
    user_id: userId,
    name: "user",
    age: 18,
    occupation: "manager",
    gender: "male",
  };
  const event = {
    body: updatedUser,
  };

  try {
    const res = await updateUser.handler(event);
    expect(res.statusCode).toEqual(200);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

exports.shouldNotUpdate = async () => {
  const event = {
    body: {},
  };

  try {
    const res = await updateUser.handler(event);
    expect(res.statusCode).not.toEqual(200);
  } catch (error) {
    console.error(error);
    throw error;
  }
};
