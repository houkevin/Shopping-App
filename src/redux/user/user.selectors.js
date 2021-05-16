import { createSelector } from 'reselect';

const selectUser = state => state.user;

// selectCurrentUser uses selectUser function 
// and sets user to user.currentUser
export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
);
