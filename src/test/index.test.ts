const createTestCase = require("./testcase/create.test");
const readTestCase = require("./testcase/readTest");
const updateTestCase = require("./testcase/update.test");
const deleteTestcase = require("./testcase/delete.test");
const userDao = require("../model/user");

const oldDb = process.env.COLLECTION_NAME;
const testUser: any = {};

beforeAll(async () => {
  process.env.COLLECTION_NAME += "test";
});

afterAll(async () => {
  await Promise.all([userDao.destroy({ where: {} })]);
  process.env.COLLECTION_NAME = oldDb;
});

describe("running test", () => {
  describe("create user test cases", () => {
    createTestCase.shouldCreate(testUser);
    createTestCase.shouldNotCreate();
  });

  describe("read user test cases", () => {
    readTestCase.shouldRead();
  });

  describe("update user test cases", () => {
    updateTestCase.shouldUpdate(testUser.user_id);
    updateTestCase.shouldNotCreate();
  });

  describe("delete user test cases", () => {
    deleteTestcase.shouldDelete(testUser.user_id);
    deleteTestcase.shouldNotDelete(testUser.user_id);
  });
});
