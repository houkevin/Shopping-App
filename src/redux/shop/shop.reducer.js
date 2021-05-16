import SHOP_DATA from './shop.data';

// initial state of the collections
// is SHOP_DATA
const INITIAL_STATE = {
  collections: SHOP_DATA
};

// shopReducer only has a default state
const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
