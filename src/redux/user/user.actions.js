import { UserActionTypes } from './user.types';

// setCurrentUser has an action type of
// SET_CURRENT_USER where the payload of
// user
export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});
