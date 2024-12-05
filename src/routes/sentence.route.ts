import { Router } from 'express';
import { SentenceController } from '../controllers';

const router = Router();

router.get('/sentences', SentenceController.getAll)

router.post('/sentences', SentenceController.create)

router.get('/sentences/:id', SentenceController.readById)

router.put('/sentences/:id', SentenceController.updateById)

router.delete('/sentences/:id', SentenceController.deleteById)

export default router;