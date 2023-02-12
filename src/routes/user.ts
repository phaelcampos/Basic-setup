import { Router } from 'express';

const userRouter = Router();

userRouter.get('/', async (req, res) => {
   console.log('iniciou');
  });

export default userRouter;