import { useCartModal } from "../../../hooks";

export function Backdrop() {
  const { closeCart } = useCartModal();

  return (
    <div
      onClick={closeCart}
      draggable={false}
      className="fixed top-0 right-0 w-full h-full z-10 bg-black/75"
    />
  );
}
