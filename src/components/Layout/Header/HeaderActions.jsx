import React from "react";
import { ShoppingCart } from "lucide-react";

import { useCartModal } from "../../../hooks";

export function HeaderActions({ shopButton, cartButton }) {
  const { openCart } = useCartModal();

  const CartButton = () =>
    cartButton ? (
      <button
        onClick={openCart}
        className="relative py-3 px-4 bg-green-500 hover:bg-green-400 shadow-lg hover:shadow-glow hover:shadow-green-500 dark:bg-green-600 dark:hover:bg-green-500 text-white dark:text-black font-semibold rounded-md transition-colors"
      >
        <ShoppingCart size={24} />

        <div
          aria-details="number of products in the cart"
          className="w-5 h-5 absolute flex items-center justify-center top-[15%] right-[15%] bg-red-500 text-xs text-white rounded-full"
        >
          12
          {/*{meals.length}*/}
        </div>
      </button>
    ) : (
      <React.Fragment></React.Fragment>
    );

  const ShopButton = () =>
    shopButton ? (
      <button className="py-3 px-4 bg-black hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-200 text-white dark:text-black font-semibold rounded-md">
        Shop now
      </button>
    ) : (
      <React.Fragment></React.Fragment>
    );

  return (
    <div className="flex gap-2 items-center justify-center">
      <CartButton />
      <ShopButton />
    </div>
  );
}
