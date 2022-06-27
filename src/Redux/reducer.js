import {
  GET_SHOES_REQUEST,
  GET_SHOES_SUCCESS,
  GET_SHOES_FAILURE,
  UPDATE_SHOE_COUNT_REQUEST,
  UPDATE_SHOE_COUNT_SUCCESS,
  UPDATE_SHOE_COUNT_FAILURE
} from './actionTypes';
const initialState = {
  shoes: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, action) => {
  // console.log(state, action);
  let { type, payload } = action;
  switch (type) {
    case GET_SHOES_REQUEST: {
      return {
        ...state,
        isError: false,
        isLoading: true
      }
    }
    case GET_SHOES_SUCCESS: {
      return {
        ...state,
        isError: false,
        isLoading: false,
        shoes: payload
      }
    }
    case GET_SHOES_FAILURE: {
      return {
        ...state,
        isError: true,
        isLoading: false,
      }
    }
    case UPDATE_SHOE_COUNT_REQUEST: {
      return { ...state }
    }
    case UPDATE_SHOE_COUNT_SUCCESS: {
      console.log("payload : ", payload);
      let temp = []
      state.shoes.forEach((x, i) => {
        if (x.id === payload.id) {
          state.shoes[i] = payload;
        }
        temp.push(state.shoes[i]);
      })
      return { ...state, shoes: temp }
    }
    case UPDATE_SHOE_COUNT_FAILURE: {
      return { ...state }
    }
    default:
      return { ...state }
  }
};
