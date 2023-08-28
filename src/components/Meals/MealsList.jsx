import { availableMeals } from "./mealsAvailable";

import { Meal } from "./Meal";

export function MealsList() {
  return (
    <section className="flex flex-col gap-8 px-4 sm:px-10 lg:px-20">
      <h2 className="font-medium text-2xl">
        Choose your <span className="underline font-semibold">meal</span>:
      </h2>
      <ul className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
        {availableMeals.map(meal => {
          return <Meal key={meal.id} meal={meal} />;
        })}
      </ul>
    </section>
  );
}
