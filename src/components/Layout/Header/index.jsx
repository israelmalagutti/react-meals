import { HeaderLogo as Logo } from "./HeaderLogo";
import { HeaderActions as Actions } from "./HeaderActions";

export function Header({ actions: { shopButton, cartButton } }) {
  return (
    <header className="flex px-4 py-6 sm:px-10 lg:px-20 justify-between sticky">
      <Logo />

      <Actions
        cartButton={cartButton || false}
        shopButton={shopButton || false}
      />
    </header>
  );
}
