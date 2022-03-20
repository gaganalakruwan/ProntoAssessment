export const SAVE_DATA = 'SAVE_DATA';
export const REMOVE_DATA = 'REMOVE_DATA';

export const addUserDetails = data => dispatch => {
  dispatch({
    type: SAVE_DATA,
    payload: data,
  });
};

export const removeUserDetails = () => dispatch => {
  dispatch({
    type: REMOVE_DATA,
  });
};
