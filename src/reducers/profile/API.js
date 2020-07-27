import {DATA_URL} from '../../constants/URL';
import axios from 'axios';

export const dataAPI = () => {
  let config = {
      url: `${DATA_URL}/users`,
      method: "GET",
  }
  return axios(config)
}