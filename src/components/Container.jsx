import React from "react";
import { Flex } from "playbook-ui";

export const Container = ({ children }) => {
  return (
    <Flex className="container" orientation="column" padding="xl" gap="sm">
      {children}
    </Flex>
  );
};
