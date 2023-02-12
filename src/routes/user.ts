import { Router } from 'express';

const userRouter = Router();

userRouter.get('/', async (req, res) => {
   console.log('iniciou');
   res.statusCode = 200;
   res.send()
  });

export default userRouter;