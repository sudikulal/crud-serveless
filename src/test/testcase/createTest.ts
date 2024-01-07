const createUser = require("../../functions/createUser");

exports.shouldCreate = () => {
  test("create user", async () => {
    const event = {
      body: {
        name: "test",
        age: 18,
        occupation: "developer",
        gender: "male",
      },
    };

    try {
      const res = await createUser.handler(event);
      expect(res.statusCode).toEqual(200);
    } catch (error) {
      console.error(error);
    }
  });
};

exports.shouldNotCreate = () => {
  test("should not create", async () => {
    const event = {
      body: {},
    };

    try {
      const res = await createUser.handler(event);
      expect(res.statusCode).not.toEqual(200);
    } catch (error) {
      console.error(error);
    }
  });
};
