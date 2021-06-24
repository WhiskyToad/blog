import React from "react";

import { VStack } from "@chakra-ui/react";

import banner from "../images/banner.jpg";

const Navbar = () => {
  return (
    <VStack
      h="300px"
      fontSize="90px"
      backgroundImage={banner}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      justify="center"
    >
      <h1>King of Tech</h1>
    </VStack>
  );
};

export default Navbar;
