import axios from 'axios'
let _api
if (process.env.BASE_URL) {
  _api = axios.create({
    baseURL: process.env.BASE_URL,
  })
} else {
  throw new Error('BASE_URL is not defined')
}

export const api = _api
