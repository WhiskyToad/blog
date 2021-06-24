import React from "react";

import { HStack, ListItem, Text, UnorderedList } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <HStack
      w="100%"
      bg="white"
      borderBottom="1px solid #232023"
      borderTop="1px solid #232023"
    >
      <UnorderedList mx="auto">
        <ListItem>JavaScript</ListItem>

        <ListItem>Python</ListItem>

        <ListItem>UI/UX</ListItem>
        <ListItem>Random</ListItem>
      </UnorderedList>
    </HStack>
  );
};

export default Navbar;
