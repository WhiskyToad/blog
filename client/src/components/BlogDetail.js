import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

import { Box } from "@chakra-ui/react";

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
      <h2>{data.title}</h2>
      <Box dangerouslySetInnerHTML={createContent()} />
    </>
  );
};

function GetBlog(slug) {
  return useQuery("posts", async () => {
    const { data } = await axios.get(`http://localhost:8000/api/blog/${slug}`);
    return data;
  });
}

export default BlogDetail;
