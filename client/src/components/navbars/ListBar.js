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
        <Link to="/blog/">
          <ListItem>All Blogs</ListItem>
        </Link>
        <Link to="/blog/category/javascript">
          <ListItem>JavaScript</ListItem>
        </Link>
        <Link to="/blog/category/python">
          <ListItem>Python</ListItem>
        </Link>
        <Link to="/blog/category/design">
          <ListItem>Design</ListItem>
        </Link>
        <Link to="/blog/category/random">
          <ListItem>Random</ListItem>
        </Link>
      </UnorderedList>
    </HStack>
  );
};

export default Navbar;
