const createUser = require("../../functions/createUser");

exports.shouldCreate = async () => {
  const user = {
    name: "user"+Math.random()*100,
    age: 18,
    occupation: "developer",
    gender: "male",
  };
  const event = {
    body: user,
  };

  try {
    const res = await createUser.handler(event);
    expect(res.statusCode).toEqual(200);
    const data = JSON.parse(res.body)
    return { ...data.user };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

exports.shouldNotCreate = async () => {
  const event = {
    body: {},
  };

  try {
    const res = await createUser.handler(event);
    expect(res.statusCode).not.toEqual(200);
  } catch (error) {
    console.error(error);
    throw error
  }
};
