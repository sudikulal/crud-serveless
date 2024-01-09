jest.setTimeout(10000);
const createTestCase = require("./testcase/createTest");
const readTestCase = require("./testcase/readTest");
const updateTestCase = require("./testcase/updateTest");
const deleteTestcase = require("./testcase/deleteTest");
const userDao = require("../model/user");

describe("running test", () => {
  let testUser: {
    _id?: string;
  };

  test.concurrent("create user", async () => {
    testUser = await createTestCase.shouldCreate();
    console.log(testUser);
  });

  test.concurrent("should not create", () => createTestCase.shouldNotCreate());

  test.concurrent("list user", () => readTestCase.shouldRead());

  test.concurrent("update user", async () => {
    expect(testUser._id).toBeDefined();
    await updateTestCase.shouldUpdate(testUser._id);
  });

  test.concurrent("should not update", () => updateTestCase.shouldNotUpdate());

  test.concurrent("delete user", async () => {
    expect(testUser._id).toBeDefined();
    await deleteTestcase.shouldDelete(testUser._id);
  });

  test.concurrent("should not delete", () => deleteTestcase.shouldNotDelete());
});
