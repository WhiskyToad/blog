import React from "react";
import { Link } from "react-router-dom";

import { HStack, Button, Text, Tooltip, Box } from "@chakra-ui/react";

import { FaPinterest, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";

const DisplayBar = ({ data }) => {
  const facebookLink = `https://www.facebook.com/sharer.php?u=http%3A%2F%2Fking-of.tech/${data.slug}`;
  const twitterLink = `https://twitter.com/intent/tweet
  ?url=http%3A%2F%2Fking-of.tech%2F&text=${data.title
    .split(" ")
    .join("+")}&hashtags=css,html`;

  return (
    <HStack
      w="100%"
      bg="white"
      borderBottom="1px solid #232023"
      borderTop="1px solid #232023"
      justify="space-between"
    >
      <Box w="180px">
        <Text textStyle="navbarTitle" p="5px">
          King of Tech
        </Text>
      </Box>
      <HStack w="250px" justify="space-between" fontSize="35px">
        <Tooltip hasArrow label="Share on Pinterest">
          <span>
            <FaPinterest color="#e60023" cursor="pointer" />
          </span>
        </Tooltip>
        <Tooltip hasArrow label="Share on Facebook">
          <span>
            <a href={facebookLink}>
              <FaFacebook color="#4495d4" cursor="pointer" />
            </a>
          </span>
        </Tooltip>
        <Tooltip hasArrow label="Share on Twitter">
          <span>
            <FaTwitter color="#1da1f2" cursor="pointer" />
          </span>
        </Tooltip>
        <Tooltip hasArrow label="Share on Linkedin">
          <span>
            <FaLinkedin color="#0a66c2" cursor="pointer" />
          </span>
        </Tooltip>
      </HStack>
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
