import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

// persistConfig acts like a global variable
// with key as root, storage, and whitelist with
// cart
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
};

// rootReducer combines the reducers
// of user, cart, directory, and shop
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);
