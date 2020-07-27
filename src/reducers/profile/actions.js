import { dataAPI} from './API';
import {
  FETCH_DATA_PENDING,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE
} from './actionTypes';


export const getData = () => dispatch => {
  const pending = () => { return { type: FETCH_DATA_PENDING } };
  const success = (response) => { return { type: FETCH_DATA_SUCCESS, payload: response } };
  const failure = (error) => { return { type: FETCH_DATA_FAILURE, payload: error }};
  dispatch(pending());  
  return dataAPI().then(
    (response) => {  
       dispatch(success(response));
    }).catch((error) => {   
      dispatch(failure(error))
      console.log("FETCH DATA ERROR"+ error)
    })
}
