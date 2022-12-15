import axios from 'axios';

export const GetCatsRequest = () => {
  return {
    type: 'GET_CAT_REQUEST',
  };
};

export const GetCatsSuccess = data => {
  return {
    type: 'GET_CAT_SUCCESS',
    payload: data,
  };
};

export const GetCatsFail = error => {
  return {
    type: 'GET_CAT_FAIL',
    payload: error,
  };
};

export const GetCatsEnd = () => {
  return {
    type: 'GET_CAT_END',
  };
};

export const GetCatByNameRequest = () => {
  return {
    type: 'GET_CAT_BY_NAME_REQUEST',
  };
};

export const GetCatByNameSuccess = data => {
  return {
    type: 'GET_CAT_BY_NAME_SUCCESS',
    payload: data,
  };
};

export const GetCatByNameFail = error => {
  return {
    type: 'GET_CAT_BY_NAME_FAIL',
    payload: error,
  };
};

export const getAllCats = page => {
  return async dispatch => {
    dispatch(GetCatsRequest());
    try {
      const res = await axios({
        method: 'GET',
        url: `https://api.thecatapi.com/v1/breeds?limit=10&page=${page}`,
      });
      const resultCat = res?.data;
      if (resultCat.length < 1) {
        dispatch(GetCatsEnd());
      } else {
        dispatch(GetCatsSuccess(resultCat));
      }
    } catch (err) {
      console.log(err);
      const message_1 = err.message;
      dispatch(GetCatsFail(message_1));
    }
  };
};

export const getCatByName = name => {
  return async dispatch => {
    dispatch(GetCatByNameRequest());
    try {
      const res = await axios({
        method: 'GET',
        url: `https://api.thecatapi.com/v1/breeds/search?name=${name}`,
      });
      const resultCatByName = res?.data;
      dispatch(GetCatByNameSuccess(resultCatByName));
    } catch (err) {
      console.log(err);
      const message_2 = err.message;
      dispatch(GetCatByNameFail(message_2));
    }
  };
};
