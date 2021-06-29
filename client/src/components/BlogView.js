import React from "react";

import { Box, HStack, VStack, Image, Text } from "@chakra-ui/react";

import DisplayBar from "./navbars/DisplayBar";
import { categoryColor } from "../utils/categoryColor";

const BlogView = ({ data }) => {
  const createContent = () => {
    return { __html: data.content };
  };

  return (
    <>
      <HStack h="100vh" textAlign="center" bg="black" color="white">
        <Image w="50vw" h="100%" objectFit="cover" src={data.thumbnail} />
        <VStack spacing={4}>
          <Box
            borderRadius="5px"
            px="5px"
            textStyle="excerpt"
            bg={categoryColor(data.category)}
          >
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
      </HStack>

      <DisplayBar data={data} />

      <Box mx="auto" my="50px" p="40px" maxW="1000px" align="center">
        <Text textStyle="heading">{data.title}</Text>
        <Box mt="40px" dangerouslySetInnerHTML={createContent()} />
      </Box>
    </>
  );
};

export default BlogView;
