const initialState = {
  loading: false,
  moreLoading: false,
  error: null,
  moreError: null,
  data: [],
  isListEnd: false,
};

const CatReducers = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'GET_CAT_REQUEST':
      if (action.page === 0) {
        return {...state, loading: true};
      } else {
        return {...state, moreLoading: true};
      }
    case 'GET_CAT_SUCCESS':
      return {
        ...state,
        data: [...state.data, ...action.payload],
        loading: false,
        moreLoading: false,
      };
    case 'GET_CAT_FAIL':
      return {
        ...state,
        error: action.payload,
        loading: false,
        moreLoading: false,
      };
    case 'GET_CAT_END':
      return {
        ...state,
        isListEnd: true,
        loading: false,
        moreLoading: false,
      };
    default:
      return state;
  }
};
export default CatReducers;
