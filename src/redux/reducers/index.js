import {combineReducers} from 'redux';

import CatReducers from './catReducers';
import CatReducersByName from './catReducersByName';

const rootReducers = combineReducers({
  CatReducers,
  CatReducersByName,
});

export default rootReducers;
