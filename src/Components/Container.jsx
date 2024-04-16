import React from "react";
import { Flex } from "playbook-ui";

export const Container = ({ children }) => {
  return (
    <Flex
      align="stretch"
      className="container"
      gap="sm"
      orientation="column"
      padding="xl"
    >
      {children}
    </Flex>
  );
};
