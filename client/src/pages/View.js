import React from "react";

import { GetBlog } from "../utils/queries";
import BlogView from "../components/BlogView";

const View = (props) => {
  const slug = props.match.params.id;
  const { isLoading, isError, data, error } = GetBlog(slug);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  return (
    <>
      <BlogView data={data} />
    </>
  );
};

export default View;
