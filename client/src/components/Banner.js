import React from "react";

import { VStack } from "@chakra-ui/react";

import banner from "../images/banner.jpg";

const Banner = () => {
  return (
    <VStack
      h="160px"
      fontSize="90px"
      backgroundImage={banner}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      spacing={4}
      textShadow="1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000"
    >
      <h1>King of Tech</h1>
    </VStack>
  );
};

export default Banner;
