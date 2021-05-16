import { UserActionTypes } from './user.types';

// the initial_state of the
// user is null
const INITIAL_STATE = {
  currentUser: null
};

// for the userReducer function the only action type it has
// is SET_CURRENT_USER where it uses the previous state and updates
// the currentUser to the value of action.payload.  The default
// value is the state.
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
