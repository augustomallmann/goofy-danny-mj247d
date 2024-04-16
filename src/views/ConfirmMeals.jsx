import React from "react";

import { DayContainer, MealCard } from "../components";

export const ConfirmMeals = () => {
  return (
    <>
      <DayContainer day="1">
        <MealCard
          image="https://unsplash.it/500/400/?image=634"
          title="Hello world"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim"
          badges={["Breakfast", "Health", "Easy"]}
        />
        <MealCard
          image="https://unsplash.it/500/400/?image=64"
          title="Hello world 2"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim"
          badges={["Breakfast", "Health", "Easy"]}
        />
      </DayContainer>
    </>
  );
};
