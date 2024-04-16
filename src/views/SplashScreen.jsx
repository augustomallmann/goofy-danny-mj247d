import React from "react";

import { Flex, Icon, Title } from "playbook-ui";

export const SplashScreen = () => {
  return (
    <Flex orientation="column" align="center" gap="sm">
      <Icon fixedWidth icon="burger" size="6x" />
      <Title text="Rex ❤️" />
    </Flex>
  );
};
