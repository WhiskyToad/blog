import React from "react";

import { GetBlogs } from "../utils/queries";
import BlogList from "../components/BlogList";

const Category = () => {
  const { isLoading, isError, data, error } = GetBlogs();

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  return (
    <>
      <BlogList data={data} />
    </>
  );
};

export default Category;
