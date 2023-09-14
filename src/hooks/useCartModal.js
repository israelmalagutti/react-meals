import { useState } from "react";

export function useCartModal() {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  // const addItem = useMemo(() => {}, [cartItems]);

  // const removeItem = useMemo(() => {}, [cartItems]);

  // const incrementItemQuantity = useCallback((itemId) => {}, [cartItems]);

  // const decrementItemQuantity = useCallback((itemId) => {}, [cartItems]);

  function openCart() {
    setShowCart(true);
  }

  function closeCart() {
    setShowCart(false);
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
