// Action Types
export const CART_ADD_ITEM = "cart/addItem";
export const CART_REMOVE_ITEM = "cart/removeItem";
export const CART_INCREASE_ITEM_QUANTITY = "cart/increaseItemQuantity";
export const CART_DECREASE_ITEM_QUANTITY = "cart/decreaseItemQuantity";

// Action Creators
export function decreaseCartItemQuantity(productId) {
  return {
    type: CART_DECREASE_ITEM_QUANTITY,
    payload: { productId },
  };
}

export function increaseCartItemQuantity(productId) {
  return {
    type: CART_INCREASE_ITEM_QUANTITY,
    payload: { productId },
  };
}

export function addToCart(productData) {
  return {
    type: CART_ADD_ITEM,
    payload: productData,
  };
}

export function removeFromCart(productId) {
  return {
    type: CART_REMOVE_ITEM,
    payload: { productId },
  };
}

export default function cartReducer(state = [], action) {
  switch (action.type) {
    case CART_ADD_ITEM:
      const existingItem = state.find(
        (cartItem) => cartItem.productId === action.payload.productId
      );
      if (existingItem) {
        return state.map((cartItem) => {
          if (cartItem.productId === existingItem.productId) {
            return { ...cartItem, quantity: cartItem.quantity + 1 };
          }
          return cartItem;
        });
      }
      // if (existingItem) {
      //   return state.map((cartItem) =>
      //     cartItem.productId === existingItem.productId
      //       ? {
      //           ...cartItem,
      //           quantity: cartItem.quantity + 1,
      //         }
      //       : cartItem
      //   );
      // }
      return [...state, { ...action.payload, quantity: 1 }];
    case CART_REMOVE_ITEM:
      return state.filter(
        (cartItem) => cartItem.productId !== action.payload.productId
      );
    case CART_INCREASE_ITEM_QUANTITY:
      return state.map((cartItem) => {
        if (cartItem.productId === action.payload.productId) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      });
    case CART_DECREASE_ITEM_QUANTITY:
      return state
        .map((cartItem) => {
          if (cartItem.productId === action.payload.productId) {
            return { ...cartItem, quantity: cartItem.quantity - 1 };
          }
          return cartItem;
        })
        .filter((cartItem) => cartItem.quantity > 0);
    default:
      return state;
  }
}
