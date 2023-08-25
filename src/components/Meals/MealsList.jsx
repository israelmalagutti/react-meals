import { Plus } from "lucide-react";
import { availableMeals } from "./mealsAvailable";

export function MealsList() {
  return (
    <section className="flex flex-col gap-8 px-4 sm:px-10 lg:px-20">
      <h2 className="font-medium text-2xl">
        Choose your <span className="underline font-semibold">meal</span>:
      </h2>
      <ul className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
        {availableMeals.map(meal => {
          return (
            <li
              key={meal.id}
              style={{
                backgroundImage: `url(${meal.image})`,
              }}
              className="max-h-[400px] min-h-[400px] relative flex items-center justify-center p-2 bg-cover shadow-md rounded overflow-clip border border-white dark:border-black hover:border-green-400 dark:hover:border-white transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black opacity-40 backdrop-blur-sm hover:backdrop-blur-none" />
              <div className="absolute bottom-2 left-3 flex flex-col">
                <h3 className="text-lg text-zinc-200 dark:hover:text-white">
                  {meal.name}
                </h3>
                <span className="text-zinc-300">U$ {meal.price}</span>
              </div>
              <button className="hidden p-2 bg-black/80 hover:bg-black rounded">
                <Plus className="text-white" />
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
