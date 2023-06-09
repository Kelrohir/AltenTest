import express, {Request, Response} from 'express';
import cors from 'cors';
import { UnknownRoutesHandler } from './middleware/unknownRoutes.handler';
import { ExceptionsHandler } from './middleware/exceptions.handler';
import { ProductsController } from './routes/products/products.controller';

const app = express();

app.use(express.json());
app.use(cors())

//controllers
app.use('/products', ProductsController)

//exception handlers
app.all('*', UnknownRoutesHandler);
app.use(ExceptionsHandler);


app.listen(3000, () => {
    console.log('Server listening http://localhost:3000')
})