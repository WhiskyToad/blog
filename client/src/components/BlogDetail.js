import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

import { Box, HStack, VStack, Image, Text } from "@chakra-ui/react";

import DisplayBar from "./DisplayBar";

const BlogDetail = (props) => {
  const slug = props.match.params.id;
  const { isLoading, isError, data, error } = GetBlog(slug);

  const createContent = () => {
    return { __html: data.content };
  };

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  return (
    <>
      <HStack h="100vh" textAlign="center" bg="black" color="white">
        <Image w="50vw" h="100%" objectFit="cover" src={data.thumbnail} />
        <VStack>
          <Text>{data.category}</Text>
          <Text textStyle="heading">{data.title.toUpperCase()}</Text>
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

function GetBlog(slug) {
  return useQuery("blog", async () => {
    const { data } = await axios.get(`http://localhost:8000/api/blog/${slug}`);
    return data;
  });
}

export default BlogDetail;
