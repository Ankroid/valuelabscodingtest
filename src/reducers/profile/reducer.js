import {
  FETCH_DATA_PENDING,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE
} from './actionTypes';

const initialState = {
  pending: false,
  error: false,
  success: false,
  apiData: []
}

export default data = (state = initialState, action) => {
  switch (action.type) {

    case FETCH_DATA_PENDING:
      return {
        ...state,
        success: false,
        pending: true,
        error: false
      };

    case FETCH_DATA_SUCCESS:
      const { data } = action.payload;
      return {
        ...state,
        success: true,
        pending: false,
        error: false,
        apiData: data
      };

    case FETCH_DATA_FAILURE:
      return {
        ...state,
        success: false,
        pending: false,
        error: true,
      };
    default:
      return state;
  }
}