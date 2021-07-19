import React from "react";
import { Link } from "react-router-dom";

import {
  Box,
  Button,
  Flex,
  HStack,
  VStack,
  Image,
  Text,
  Tooltip,
} from "@chakra-ui/react";

import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

import DisplayBar from "./navbars/DisplayBar";
import { categoryColor } from "../utils/categoryColor";
import FadeInWhenVisible from "../utils/FadeInWhenVisible";

const BlogView = ({ data }) => {
  const createContent = () => {
    return { __html: data.content };
  };

  return (
    <>
      <Flex
        flexDirection={{ base: "column", lg: "row" }}
        align="center"
        minH="100vh"
        textAlign="center"
        bg="black"
        color="white"
      >
        <Image
          w={{ base: "100vw", lg: "50vw" }}
          h={{ base: "50vh", lg: "100vh" }}
          objectFit="cover"
          src={data.thumbnail}
          alt={data.title}
        />
        <VStack w="100%" spacing={4} py={{ base: "20px", lg: "10px" }}>
          <Box px="10px" textStyle="excerpt" bg={categoryColor(data.category)}>
            {data.category}
          </Box>
          <Text textStyle="heading">{data.title.toUpperCase()}</Text>
          <Text textStyle="excerpt" px="40px">
            {data.excerpt}
          </Text>
          <Text>
            {data.day} {data.month} {data.year}
          </Text>
        </VStack>
      </Flex>

      <DisplayBar />

      <VStack
        mx="auto"
        my="50px"
        p="10px"
        maxW="1000px"
        align="center"
        textAlign="center"
        spacing={4}
      >
        <Text textStyle="heading">{data.title}</Text>
        <Box mt="40px" dangerouslySetInnerHTML={createContent()} />
        <ShareLinks data={data} />
        <Link to="/blog/">
          <Button bg="white" my="20px">
            Back to Blogs
          </Button>
        </Link>
      </VStack>
    </>
  );
};

const ShareLinks = ({ data }) => {
  const facebookLink = `https://www.facebook.com/sharer.php?u=http%3A%2F%2Fking-of.tech%2Fblog%2F${data.slug}`;

  const twitterLink = `https://twitter.com/intent/tweet?text=https%3A//www.king-of.tech/blog/${data.slug}`;

  const linkedinLink = `https://www.linkedin.com/shareArticle?mini=true&url=https%3A//www.king-of.tech/blog/${data.slug}&title=&summary=&source=`;

  return (
    <>
      <FadeInWhenVisible>
        <VStack spacing={4}>
          <h3>Liked it? Share it!</h3>
          <HStack w="250px" justify="space-between" fontSize="35px">
            <Tooltip hasArrow label="Share on Facebook">
              <span>
                <a
                  href={facebookLink}
                  name="Share on Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook color="#4495d4" cursor="pointer" />
                </a>
              </span>
            </Tooltip>

            <Tooltip hasArrow label="Share on Twitter">
              <span>
                <a
                  href={twitterLink}
                  name="Share on Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter color="#1da1f2" cursor="pointer" />
                </a>
              </span>
            </Tooltip>

            <Tooltip hasArrow label="Share on Linkedin">
              <span>
                <a
                  href={linkedinLink}
                  name="Share on Linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin color="#0a66c2" cursor="pointer" />
                </a>
              </span>
            </Tooltip>
          </HStack>
        </VStack>
      </FadeInWhenVisible>
    </>
  );
};
export default BlogView;
