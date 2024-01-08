const createUser = require("../../functions/createUser");

exports.shouldCreate = (testUser: object) => {
  test("create user", async () => {
    const user = {
      name: "test",
      age: 18,
      occupation: "developer",
      gender: "male",
    };
    const event = {
      body: user,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    try {
      const res = await createUser.handler(event);
      expect(res.statusCode).toEqual(200);
      expect(res).toEqual({
        statusCode: 200,
        body: JSON.stringify({
          message: "success",
          user: user,
        }),
      });

      testUser = { ...user };
    } catch (error) {
      console.error(error);
    }
  });
};

exports.shouldNotCreate = () => {
  test("should not create", async () => {
    const event = {
      body: {},
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    try {
      const res = await createUser.handler(event);
      expect(res.statusCode).not.toEqual(200);
    } catch (error) {
      console.error(error);
    }
  });
};
