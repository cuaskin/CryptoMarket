import * as Koa from "koa";
import * as Router from "koa-router";
import * as HttpStatus from "http-status-codes";
import axios from "axios";

const routerOptions: Router.IRouterOptions = {
  prefix: "/coin"
};

const router: Router = new Router(routerOptions);
let coins: any[] = [];

const getAxios = async (ctx: Koa.Context) => {
  await axios
    .get("https://api.coinmarketcap.com/v1/ticker/")
    .then(response => {
      coins = response.data;
    })
    .catch(error => console.log("axios error:", error));
};

router.get("/", async (ctx: Koa.Context) => {
  getAxios(ctx);
  ctx.body = coins;
});

router.get("/:coin_id?", async (ctx: Koa.Context) => {
  getAxios(ctx);

  let isSearch: boolean = false;

  if (coins !== null) {
    coins.forEach(
      (element: any): void => {
        if (element.symbol === ctx.params.coin_id) {
          isSearch = true;
          ctx.status = HttpStatus.OK;
          ctx.body = {
            status: "success",
            symbol: element.symbol,
            price: element.price_usd
          };
        }
      }
    );
    if (!isSearch) {
      ctx.status = HttpStatus.NOT_FOUND;
      ctx.body = { status: "error"};
    }
  } else {
    ctx.throw(HttpStatus.NOT_FOUND);
  }
});

export default router;
