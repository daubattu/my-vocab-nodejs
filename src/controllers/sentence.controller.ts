import { Request, Response } from 'express'
import Sentence from '../models/sentence.model'
import logger from '../utils/logger.util';

const getSentences = (request: Request, response: Response) => {

  const sentence = new Sentence({ unit: 1, index: 1, text: 'Today is wenesday' });
  sentence.save()
    .then(() => console.log('meow'))
    .catch(error => console.error(error))

  response.status(200).json({ status: 200 })
}

const createSentence = (request: Request, response: Response) => {
  response.status(200).json({ status: 200 })
}

const readSentence = (request: Request, response: Response) => {
  response.status(200).json({ status: 200 })
}

const updateSentence = (request: Request, response: Response) => {
  response.status(200).json({ status: 200 })
}

const deleteSentence = (request: Request, response: Response) => {
  response.status(200).json({ status: 200 })
}

export default {
  getSentences,
  createSentence,
  readSentence,
  updateSentence,
  deleteSentence
}