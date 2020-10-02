import axios from 'axios'
import { csvToObjectArray } from '../utils'

export const fetchAdvertisingData = async (callback) => {
  const csv = await axios('http://adverity-challenge.s3-website-eu-west-1.amazonaws.com/DAMKBAoDBwoDBAkOBAYFCw.csv')
  let data = csvToObjectArray(csv.data)

  callback(data)
}