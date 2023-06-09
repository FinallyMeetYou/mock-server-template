const Koa = require("koa");
const Router = require("koa-router");
const mockList = require("./mock/index");

const app = new Koa();
const router = new Router();

// 手动延迟
async function getRes(fn) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = fn();
      resolve(result);
    }, 1000);
  });
}

mockList.forEach((item) => {
  const { url, method, response } = item;

  router[method](url, async (ctx) => {
    const result = await getRes(response);
    ctx.body = result;
  });
});

app.use(router.routes());
app.listen(3636);
