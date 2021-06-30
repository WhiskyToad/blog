import React from "react";
import { Link } from "react-router-dom";

import { HStack, Button, Text, Box } from "@chakra-ui/react";

import { BiArrowBack } from "react-icons/bi";

const DisplayBar = () => {
  return (
    <HStack
      w="100%"
      bg="white"
      borderBottom="1px solid #232023"
      borderTop="1px solid #232023"
      justify="space-between"
    >
      <Box w="180px">
        <Text textStyle="navbarTitle" p="5px" ml="20px">
          King of Tech
        </Text>
      </Box>

      <Box w="180px" textAlign="center">
        <Link to="/blog">
          <Button>
            <BiArrowBack />
            <Text ml="5px"> Blogs</Text>
          </Button>
        </Link>
      </Box>
    </HStack>
  );
};

export default DisplayBar;
