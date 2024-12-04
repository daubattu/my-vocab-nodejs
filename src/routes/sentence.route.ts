import { Router } from 'express';
import { SentenceController } from '../controllers';

const router = Router();

router.get('/sentences', SentenceController.getSentences)

router.post('/sentences', SentenceController.createSentence)

router.get('/sentences/:id', SentenceController.readSentence)

router.put('/sentences/:id', SentenceController.updateSentence)

router.delete('/sentences/:id', SentenceController.deleteSentence)

export default router;