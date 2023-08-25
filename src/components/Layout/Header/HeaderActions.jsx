import React from "react";
import { ShoppingCart } from "lucide-react";

export function HeaderActions({ shopButton, cartButton }) {
  const CartButton = () =>
    cartButton ? (
      <button className="py-3 px-4 bg-green-600 hover:bg-green-700 dark:bg-white dark:hover:bg-zinc-200 text-white dark:text-black font-semibold rounded-md">
        <ShoppingCart size={24} />
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
