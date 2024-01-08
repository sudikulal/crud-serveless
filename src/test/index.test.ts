const createTestCase = require("./testcase/createTest");
const readTestCase = require("./testcase/readTest");
const updateTestCase = require("./testcase/updateTest");
const deleteTestcase = require("./testcase/deleteTest");
const userDao = require("../model/user");

const testUser: any = {};

describe("running test", () => {
  createTestCase.shouldCreate(testUser);
  createTestCase.shouldNotCreate();

  readTestCase.shouldRead();

  updateTestCase.shouldUpdate(testUser.user_id);
  updateTestCase.shouldNotUpdate();

  deleteTestcase.shouldDelete(testUser.user_id);
  deleteTestcase.shouldNotDelete(testUser.user_id);
});

