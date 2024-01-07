const readUSer = require("../../functions/listUser");

exports.shouldRead = () => {
  test("list user", async () => {
    const event = {
      body: {},
    };

    try {
      const res = await readUSer.handler(event);
      expect(res.statusCode).toEqual(200);
      const responseData = JSON.parse(res.body);
      expect(responseData).toContain("user");
    } catch (error) {
      console.error(error);
    }
  });
};
