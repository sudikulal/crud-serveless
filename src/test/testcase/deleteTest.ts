const deleteUser = require("../../functions/deleteUser");

exports.shouldDelete = (userId: String) => {
  test("delete user", async () => {
    const event = {
      body: {
        user_id: userId,
      },
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
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
    const event = {
      body: {
        user_id: userId,
      },
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
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
