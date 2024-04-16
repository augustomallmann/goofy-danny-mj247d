import React from "react";
import {
  CircleIconButton,
  Image,
  Badge,
  Title,
  Icon,
  Card,
  Flex,
  Body,
} from "playbook-ui";

export const MealCard = ({ image, title, text, badges }) => {
  return (
    <Flex align="center" gap="sm" className="meal-container">
      <Card borderNone padding="xs" borderRadius="md" shadow="deep">
        <Flex gap="sm" align="center">
          <Image
            alt="picture of a misty forest"
            size="sm"
            url={image}
            rounded
          />
          <Flex orientation="column" gap="xs">
            <Title size="4" text={title} />
            <Body truncate="1" text={text}></Body>
            <Flex gap="xxs">
              {badges.map((badge) => (
                <Badge text={badge} variant="primary" />
              ))}
            </Flex>
          </Flex>
          <Icon icon="chevron-right" size="lg" marginRight="xs" />
        </Flex>
      </Card>
      <Flex className="action-buttons-container" orientation="column" gap="xs">
        <CircleIconButton icon="arrow-rotate-left" variant="secondary" />
        <CircleIconButton icon="trash" variant="secondary" />
      </Flex>
    </Flex>
  );
};
