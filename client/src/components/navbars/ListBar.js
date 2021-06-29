import React from "react";
import { Link } from "react-router-dom";
import { HStack, ListItem, UnorderedList } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <HStack
      w="100%"
      bg="white"
      borderBottom="1px solid #232023"
      borderTop="1px solid #232023"
    >
      <UnorderedList mx="auto">
        <Link to="/category/javascript">
          <ListItem>JavaScript</ListItem>
        </Link>
        <Link to="/category/python">
          <ListItem>Python</ListItem>
        </Link>
        <Link to="/category/uiux">
          <ListItem>UI/UX</ListItem>
        </Link>
        <Link to="/category/random">
          <ListItem>Random</ListItem>
        </Link>
      </UnorderedList>
    </HStack>
  );
};

export default Navbar;
