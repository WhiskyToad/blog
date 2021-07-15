import React, { useState } from "react";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import { VStack, HStack, Grid, Text, Image, Box } from "@chakra-ui/react";

import { categoryColor } from "../utils/categoryColor";

const BlogList = ({ data }) => {
  const MotionHStack = motion(HStack);

  // display for each blog
  const BlogCard = ({ blog, index }) => {
    const [display, setDisplay] = useState(false);
    if (blog.featured) {
      // do something with featured blog
    }
    if (blog.hide) return null;

    return (
      <Link to={`/blog/${blog.slug}`}>
        <MotionHStack
          position="relative"
          overflow="hidden"
          borderRadius="5px"
          w="340px"
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
          <VStack
            w="100%"
            textAlign="center"
            zIndex="99"
            p="10px"
            color="white"
          >
            <Box
              borderRadius="5px"
              px="5px"
              color="white"
              bg={categoryColor(blog.category)}
            >
              {blog.category}
            </Box>
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

  return (
    <>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        maxW="1100px"
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

export default BlogList;
