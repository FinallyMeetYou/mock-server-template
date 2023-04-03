const Mock = require("mockjs");

const Random = Mock.Random;

module.exports = [
  {
    url: "/api/test",
    method: "get",
    response() {
      return {
        code: 200,
        data: [
          {
            id: Random.id(),
            title: Random.title(),
          },
        ],
        message: "mock question ok",
      };
    },
  },
];
