const createTestCase = require("./testcase/create.test");
const readTestCase = require("./testcase/readTest");
const updateTestCase = require("./testcase/update.test");
const deleteTestcase = require("./testcase/delete.test");
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

