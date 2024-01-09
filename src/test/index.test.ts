jest.setTimeout(10000);
const createTestCase = require("./testcase/createTest");
const readTestCase = require("./testcase/readTest");
const updateTestCase = require("./testcase/updateTest");
const deleteTestcase = require("./testcase/deleteTest");
const userDao = require("../model/user");

describe("running test", () => {
  let testUser: {
    user_id?:string
  };
  test.concurrent("create user", () => {
    testUser = createTestCase.shouldCreate();
  });
  test.concurrent("should not create", () => createTestCase.shouldNotCreate());

  test.concurrent("list user", () => readTestCase.shouldRead());

  test.concurrent("update user", () =>
    updateTestCase.shouldUpdate(testUser.user_id)
  );
  test.concurrent("should not update", () => updateTestCase.shouldNotUpdate());

  test.concurrent("delete user", () =>
    deleteTestcase.shouldDelete(testUser.user_id)
  );
  test.concurrent("should not delete", () =>
    deleteTestcase.shouldNotDelete(testUser.user_id)
  );
});
