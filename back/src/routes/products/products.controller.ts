import { Request, Response, Router } from 'express';
import { ProductsService } from './products.service';


const ProductsController = Router()
const service = new ProductsService()

ProductsController.post('/', async (req: Request<{}, {}>, res: Response) => {
    return res
      .status(200)
      .json(await service.create(req.body))
  })

ProductsController.get('/', async (req: Request<{ productId: string }>, res: Response) => {
  return res
    .status(200)
    .json(await service.findAll())
})

ProductsController.get('/:productId', async (req: Request<{ productId: string }>, res: Response) => {
  const result = await service.findOneById(req.params.productId);

  if (result) return res.status(200).json(result);

  return res.status(404).send("Unknown Product")
})

ProductsController.patch('/:productId', async (req: Request<{ productId: string }>, res: Response) => {
  const result = await service.updateOneById(req.params.productId, req.body);

  if (result) return res.status(200).json(result);

  return res.status(404).send("Unknown Product")
})

ProductsController.delete('/:productId', async (req: Request<{ productId: string }>, res: Response) => {
  const result = await service.deleteOneById(req.params.productId);

  return res.status(200).send("Product successfuly deleted");
})
export { ProductsController }