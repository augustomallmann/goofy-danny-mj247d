/* @flow*/

import React from "react";
import { Container } from "./components/Container";
import { ConfirmMeals } from "./views/ConfirmMeals";
import { SplashScreen } from "./views/SplashScreen";

export default function App() {
  return (
    <div className="App">
      <Container>
        <ConfirmMeals />
        {/* <SplashScreen /> */}
      </Container>
    </div>
  );
}
