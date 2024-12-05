import { Request, Response } from 'express'
import Sentence from '../models/sentence.model'
import logger from '../utils/logger.util';

const getAll = (request: Request, response: Response) => {

  const sentence = new Sentence({ unit: 1, index: 1, text: 'Today is wenesday' });
  sentence.save()
    .then(() => console.log('meow'))
    .catch(error => console.error(error))

  response.status(200).json({ status: 200 })
}

const create = (request: Request, response: Response) => {
  response.status(200).json({ status: 200 })
}

const readById = (request: Request, response: Response) => {
  response.status(200).json({ status: 200 })
}

const updateById = (request: Request, response: Response) => {
  response.status(200).json({ status: 200 })
}

const deleteById = (request: Request, response: Response) => {
  response.status(200).json({ status: 200 })
}

export default {
  getAll,
  create,
  readById,
  updateById,
  deleteById
}