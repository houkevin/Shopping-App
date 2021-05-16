import { createSelector } from 'reselect';

const selectShop = state => state.shop;
// selectCollections uses selectShop function
// to return the collections of the shop
export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

// selectCollectionsForPreview uses the selectCollections
// function to set a collection where the objects are found
// using collections[key]
export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
);

// selectCollection uses the selectCollections function
// to set a collection using collections[collecitonUrlParam]
export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
  );
