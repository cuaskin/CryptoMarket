import * as Koa from 'koa';
import * as cors from 'koa2-cors';
import * as HttpStatus from 'http-status-codes';
import coinController from '../coin/coin.controller';

const app:Koa = new  Koa();

app.use(async (ctx:Koa.Context, next:() => Promise<any>) =>{
    try {
        await next();
    } catch (error) {
         ctx.status = error.statusCode || error.status || HttpStatus.INTERNAL_SERVER_ERROR;
         error.statusCode = ctx.status;
         ctx.body = {error};
         ctx.app.emit('error',error,ctx);   
        }
});

//Route middleware
app.use(cors());
app.use(coinController.routes());
app.use(coinController.allowedMethods());


//application error logging
app.on('error',console.error);

export default app;
