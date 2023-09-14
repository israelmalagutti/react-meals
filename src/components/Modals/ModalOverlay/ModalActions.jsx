import { cn } from "../../../utils";

export function ModalTitle({ children, className }) {
  return (
    <div className={cn("text-black dark:text-white", className && className)}>
      {children}
    </div>
  );
}
