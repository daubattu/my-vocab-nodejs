import { Router } from 'express';
import { WordController } from '../controllers';

const router = Router();

router.get('/translate', WordController.getTranslate)

router.get('/words', WordController.getAll)

router.post('/words', WordController.create)

router.get('/words/:id', WordController.readById)

router.put('/words/:id', WordController.updateById)

router.delete('/words/:id', WordController.deleteById)

export default router;