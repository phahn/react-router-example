import Koa from 'koa';
import indexRoutes from './routes/index';

const app = new Koa();
const PORT = 1337;

app.use(indexRoutes.routes());


const server = app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});

export default server;