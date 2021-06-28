import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { motion } from "framer-motion";

import { VStack, HStack, Grid, Text, Image } from "@chakra-ui/react";

import Navbar from "./Navbar";
import Banner from "./Banner";

const BlogList = () => {
  const MotionHStack = motion(HStack);
  const { isLoading, isError, data, error } = GetBlogs();

  // display for each blog
  const BlogCard = ({ blog, index }) => {
    const [display, setDisplay] = useState(false);
    if (blog.featured) {
      // do something with featured blog
    }
    return (
      <Link to={`/blog/${blog.slug}`}>
        <MotionHStack
          position="relative"
          overflow="hidden"
          borderRadius="5px"
          w="360px"
          h="260px"
          bg="black"
          cursor="pointer"
          key={index}
          onMouseEnter={() => setDisplay(true)}
          onMouseLeave={() => setDisplay(false)}
          whileHover={{ scale: 1.15, zIndex: "9999" }}
        >
          <Image
            w="100%"
            h="100%"
            objectFit="cover"
            src={blog.thumbnail}
            position="absolute"
            top="0"
            left="0"
            opacity={display ? "0.25" : "0.6"}
          />
          <VStack w="100%" textAlign="center" zIndex="99">
            {display ? (
              <>
                <Text textStyle="excerpt" m="10px">
                  {blog.excerpt}
                </Text>
              </>
            ) : (
              <h3>{blog.title}</h3>
            )}
          </VStack>
        </MotionHStack>
      </Link>
    );
  };

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  //      bg="linear-gradient(90deg,#4eafcf 15%,#ff5601 40%,#4eafcf 85%)"

  return (
    <>
      <Banner />
      <Navbar />
      <Grid
        templateColumns="repeat(3, 1fr)"
        w="1150px"
        p="20px"
        gap={4}
        my="50px"
        mx="auto"
        bg="white"
        borderRadius="5px"
        boxShadow="md"
      >
        {data.map((blog, index) => (
          <BlogCard blog={blog} key={index} />
        ))}
      </Grid>
    </>
  );
};

function GetBlogs() {
  return useQuery("blogs", async () => {
    const { data } = await axios.get(`http://localhost:8000/api/blog/`);
    return data;
  });
}

export default BlogList;
