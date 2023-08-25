export function HeaderRoot({ children }) {
  return (
    <header className="flex px-4 py-6 sm:px-10 lg:px-20 justify-between sticky">
      {children}
    </header>
  );
}
