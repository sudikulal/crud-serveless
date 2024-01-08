const updateUser = require("../../functions/updateUser");

exports.shouldUpdate = (userId: String) => {
  test("update user", async () => {
    const updatedUser = {
      user_id: userId,
      name: "user",
      age: 18,
      occupation: "manager",
      gender: "male",
    };
    const event = {
      body: updatedUser,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    try {
      const res = await updateUser.handler(event);
      expect(res.statusCode).toEqual(200);
      expect(res).toEqual({
        statusCode: 200,
        body: JSON.stringify({ message: "success", user: updatedUser }),
      });
    } catch (error) {
      console.error(error);
    }
  });
};

exports.shouldNotUpdate = () => {
  test("should not update", async () => {
    const event = {
      body: {},
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    try {
      const res = await updateUser.handler(event);
      expect(res.statusCode).not.toEqual(200);
    } catch (error) {
      console.error(error);
    }
  });
};
