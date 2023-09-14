import { cn } from "../../../utils";

export function ModalTitle({ children, className }) {
  return (
    <h2
      className={cn(
        "text-2xl text-black dark:text-white",
        className && className
      )}
    >
      {children}
    </h2>
  );
}
