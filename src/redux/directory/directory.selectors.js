import { createSelector } from 'reselect';

const selectDirectory = state => state.directory;

// selectDirectorySections uses selectDirectory function
// and returns the sections
export const selectDirectorySections = createSelector(
  [selectDirectory],
  directory => directory.sections
);
