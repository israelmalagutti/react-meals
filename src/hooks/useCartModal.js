import { useState } from "react";

export function useCartModal() {
  const [showCart, setShowCart] = useState();
  const [cartItems, setCartItems] = useState([]);

  // const addItem = useMemo(() => {}, [cartItems]);

  // const removeItem = useMemo(() => {}, [cartItems]);

  // const incrementItemQuantity = useCallback(() => {}, [cartItems]);

  // const decrementItemQuantity = useCallback(() => {}, [cartItems]);

  function openCart() {
    setShowCart(true);
  }

  function closeCart() {
    setShowCart(true);
  }

  return {
    cartItems,

    showCart,
    openCart,
    closeCart,

    // addItem,
    // removeItem,
    // incrementItemQuantity,
    // decrementItemQuantity,
  };
}
