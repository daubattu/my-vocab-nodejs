import { Request, Response } from 'express'
import Sentence from '../models/sentence.model'
import tr from 'googletrans'
import axios from 'axios'

// const fetchPhoneticsAndTranslation = async (word) => {
//   const dictionaryUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
//   const googleTranslateUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=vi&dt=t&q=${encodeURIComponent(word)}`;

//   try {
//     // Lấy phiên âm từ DictionaryAPI
//     const dictResponse = await axios.get(dictionaryUrl);
//     const phonetics = dictResponse.data[0]?.phonetics || [];
//     const phoneticText = phonetics.map(p => p.text).join(', ') || 'Không có phiên âm';

//     // Dịch sang tiếng Việt
//     const translateResponse = await axios.get(googleTranslateUrl);
//     const translation = translateResponse.data[0][0][0];

//     return {
//       text: word,
//       phonetic: phoneticText,
//       translation,
//       phonetics: dictResponse.data[0]?.phonetics
//     }

//     console.log(`Từ: ${word}`);
//     console.log(`Phiên âm: ${phoneticText}`);
//     console.log(`Dịch nghĩa: ${translation}`);
//   } catch (error) {
//     console.error('Lỗi:', error.response?.data || error.message);
//   } finally {
//     // return null
//   }
// };

// // Thử nghiệm với từ "example"

// const getTranslate = async (request: Request, response: Response) => {
//   const result: any = await fetchPhoneticsAndTranslation('The basic syntax of a URL request to the API is shown below');

//   return response.status(200).json({ status: 200, data: result })
// }

const getTranslate = async (request: Request, response: Response) => {
  async function translation() {
    let _result = null;

    try {
      _result = await tr("When", { to: 'vi' });
    } catch (error) {
      console.error(error);
    } finally {
      return _result
    }
  }

  const result: any = await translation()

  return response.status(200).json({ status: 200, data: result })
}

const getAll = (request: Request, response: Response) => {
  const sentence = new Sentence({ unit: 1, index: 1, text: 'Today is wenesday' });
  sentence.save()
    .then(() => console.log('meow'))
    .catch(error => console.error(error))

  response.status(200).json({ status: 200 })
}

const create = (request: Request, response: Response) => {
  console.log('response', response)
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
  deleteById,
  getTranslate
}