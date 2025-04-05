import { combineReducers, createStore } from "redux";
import cartReducer, {
  addToCart,
  CART_ADD_ITEM,
  CART_DECREASE_ITEM_QUANTITY,
  CART_INCREASE_ITEM_QUANTITY,
  CART_REMOVE_ITEM,
  decreaseCartItemQuantity,
  increaseCartItemQuantity,
  removeFromCart,
} from "./cartReducer";
import wishlistReducer, {
  addToWishlist,
  removeFromWishlist,
  WISHLIST_ADD_ITEM,
  WISHLIST_REMOVE_ITEM,
} from "./wishlistReducer";
import productsReducer from "./productsReducer";

const reducer = combineReducers({
  products: productsReducer,
  cartItems: cartReducer,
  wishlist: wishlistReducer,
});

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// console.log(store);

// store.dispatch(addToCart(1, 1));
// store.dispatch(addToCart(15, 1));
// store.dispatch(addToCart(20, 1));
// store.dispatch(removeFromCart(1));
// store.dispatch(increaseCartItemQuantity(15));
// store.dispatch(increaseCartItemQuantity(15));
// store.dispatch(increaseCartItemQuantity(20));
// store.dispatch(decreaseCartItemQuantity(20));
// store.dispatch(addToWishlist(1));
// store.dispatch(addToWishlist(17));
// store.dispatch(removeFromWishlist(1));
