const Koa = require("koa");
const Router = require("koa-router");
const mockList = require("./mock/index");

const app = new Koa();
const router = new Router();

mockList.forEach((item) => {
  const { url, method, response } = item;

  router[method](url, async (ctx) => {
    const result = response();
    ctx.body = result;
  });
});

app.use(router.routes());
app.listen(3636);
