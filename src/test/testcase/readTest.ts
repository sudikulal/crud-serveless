const readUSer = require("../../functions/listUser");

exports.shouldRead = () => {
  test("list user", async () => {
    const event = {
      body: {},
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    try {
      const res = await readUSer.handler(event);
      expect(res.statusCode).toEqual(200);
    } catch (error) {
      console.error(error);
    }
  });
};
