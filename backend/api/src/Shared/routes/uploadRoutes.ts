import { Router } from "express";
import { uploadImageController } from "../controllers/uploadControllers";
import { uploadImageMiddleware } from "../middlewares/uploadMiddlewares";

const router: Router = Router();

router.post('/api/upload/image', uploadImageMiddleware, uploadImageController);

export default router;
