const deleteUser = require("../../functions/deleteUser");

exports.shouldDelete = (userId: String) => {
  test("delete user", async () => {
    const event = {
      body: {
        user_id: userId,
      },
    };

    try {
      const res = await deleteUser.handler(event);
      expect(res.statusCode).toEqual(200);
    } catch (error) {
      console.error(error);
    }
  });
};

exports.shouldNotDelete = (userId: String) => {
  test("should not delete", async () => {
    const req = {
      body: {
        user_id: userId,
      },
    };

    try {
      const res = await deleteUser.handler(event);
      expect(res.statusCode).not.toEqual(200);
    } catch (error) {
      console.error(error);
    }
  });
};
