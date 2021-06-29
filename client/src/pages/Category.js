import React from "react";

import { GetCategory } from "../utils/queries";
import BlogList from "../components/BlogList";

const Category = (props) => {
  const category = props.match.params.id;
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const { isLoading, isError, data, error } = GetCategory(category, config);

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
