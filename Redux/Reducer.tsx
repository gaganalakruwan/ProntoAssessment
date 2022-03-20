import {REMOVE_DATA, SAVE_DATA} from './Action';

const initialState = {
  userDetails: [],
};

function reducer(state = initialState, {type, payload}) {
  switch (type) {
    case SAVE_DATA:
      return {...state, userDetails: payload};

    case REMOVE_DATA:
      return {...initialState};

    default:
      return state;
  }
}
export default reducer;
