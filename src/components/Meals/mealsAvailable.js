import Bourbon from "../../assets/drinks/bourbon.jpg";
import Lemonade from "../../assets/drinks/lemonade.jpg";
import PinappleJuice from "../../assets/drinks/pinapple-juice.jpg";

import ChickenSkewer from "../../assets/meals/chiken-skewer.jpg";
import Steak from "../../assets/meals/steak.jpg";
import FilletMignon from "../../assets/meals/filet-mignon.jpg";
import SundriedSteak from "../../assets/meals/sundried-meat.jpg";

export const availableMeals = [
  {
    id: "0",

    image: Lemonade,

    name: "Lemonade",
    description: "A refreshing drink to help you cool down",
    price: 1.0,

    type: "drink",
  },
  {
    id: "1",

    image: PinappleJuice,

    name: "Pinapple juice",
    description: "An exotic drink to make you feel happy and relaxed",
    price: 2.5,

    type: "drink",
  },
  {
    id: "2",

    image: Bourbon,

    name: "Homemade Bourbon",
    description: "A drink to make you feel smooth and relaxed",
    price: 5.0,

    type: "drink",
  },
  {
    id: "3",

    image: ChickenSkewer,

    name: "Chicken Skewer",
    description: "A skewer made with the traditional house spices and chicken",
    price: 6.0,

    type: "meal",
  },
  {
    id: "4",

    image: Steak,

    name: "Stake",
    description: "A wondefull steak made with the best hand-picked meat",
    price: 10.0,

    type: "meal",
  },
  {
    id: "5",

    image: SundriedSteak,

    name: "Sun-dried steak",
    description: "",
    price: 10.0,

    type: "meal",
  },
  {
    id: "6",
    image: FilletMignon,

    name: "Fillet Mignon",
    description: "",
    price: 12.0,

    type: "meal",
  },
];
