import FoodThinking from "../assets/foodThinking.svg";

import { Header, Footer } from "../components";

export default function LandingPage() {
  return (
    <>
      <Header actions={{ cartButton: false, shopButton: true }} />

      <div className="w-full flex flex-col flex-auto gap-3 items-center justify-center">
        <img
          src={FoodThinking}
          alt="Person grocery shopping"
          className="h-[432px] mx-2 sm:mx-0"
        />
        <div className="flex flex-col gap-3 mx-6 sm:mx-0">
          <div className="text-2xl font-semibold dark:text-white">
            Anything you need, everthing you deserve!
          </div>
          <button className="py-3 px-4 bg-black hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-200 text-white dark:text-black font-semibold rounded-md">
            Order now!
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}
