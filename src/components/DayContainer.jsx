import React from "react";

import { Flex, Caption } from "playbook-ui";

export const DayContainer = ({ day, children }) => {
  return (
    <Flex className="day-container" orientation="column" gap="sm">
      <Caption text={`Day ${day}`} />
      {children}
    </Flex>
  );
};
