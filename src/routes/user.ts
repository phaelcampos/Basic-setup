import { Router } from 'express';

const userRouter = Router();

userRouter.get('/', async (req, res) => {
   console.log('iniciou');
    console.log("1231321")
   res.statusCode = 200;
   res.send()
  });

export default userRouter;