import { Header, Footer } from "../components";

export function Layout({
  children,
  headerActions: { shopButton, cartButton },
}) {
  return (
    <>
      <Header.Root>
        <Header.Logo />
        <Header.Actions
          shopButton={shopButton || false}
          cartButton={cartButton || false}
        />
      </Header.Root>

      {children}

      <Footer />
    </>
  );
}
