import { cn } from "../../../utils";

export function ModalRoot({ children, className = "" }) {
  return (
    <div
      className={cn(
        "w-1/2 max-h-[75%] fixed z-50 inset-0 m-auto overflow-hidden",
        className && className
      )}
    >
      {children}
    </div>
  );
}
