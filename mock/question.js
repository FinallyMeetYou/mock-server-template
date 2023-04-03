const Mock = require("mockjs");

const Random = Mock.Random;

module.exports = [
  {
    url: "/api/question",
    method: "get",
    response() {
      return {
        code: 200,
        data: [
          {
            id: Random.id(),
            name: Random.cname(),
          },
        ],
        message: "mock question ok",
      };
    },
  },
  {
    url: "/api/postdemo",
    method: "post",
    response() {
      return {
        code: 200,
        data: {
          id: Random.id(),
        },
        message: "post ok",
      };
    },
  },
];
