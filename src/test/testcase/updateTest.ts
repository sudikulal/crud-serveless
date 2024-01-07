const updateUser = require("../../functions/updateUser");

exports.shouldUpdate = (userId: String) => {
  test("delete user", async () => {
    const event = {
      body: {
        user_id: userId,
        name: "user",
        age: 18,
        occupation: "manager",
        gender: "male",
      },
    };

    try {
      const res = await updateUser.handler(event);
      expect(res.statusCode).toEqual(200);
    } catch (error) {
      console.error(error);
    }
  });
};

exports.shouldNotUpdate = () => {
  test("should not update", async () => {
    const req = {
      body: {},
    };

    try {
      const res = await updateUser.handler(event);
      expect(res.statusCode).not.toEqual(200);
    } catch (error) {
      console.error(error);
    }
  });
};
