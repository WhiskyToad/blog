import React from "react";

import { VStack, HStack, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <VStack
      w="100vw"
      h="80px"
      borderTop="2px solid black"
      bg="#00364c"
      color="white"
    >
      <Text textStyle="navbarTitle">King of Tech</Text>
      <HStack spacing={6}>
        <a href="www.whiskytoad.com">
          <Text>Created by WhiskyToad</Text>
        </a>
        <Text>© 2021</Text>
      </HStack>
    </VStack>
  );
};

export default Footer;
