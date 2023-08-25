import { PencilRulerIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full p-4 flex items-center justify-center">
      <div className="flex gap-2 items-center text-black dark:text-white">
        <PencilRulerIcon size={16} />
        <div>
          Illustrations by{" "}
          <a
            href="https://storyset.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-zinc-800 dark:hover:text-zinc-200 underline cursor-pointer"
          >
            Storyset
          </a>
        </div>
      </div>
    </footer>
  );
}
