import React from "react";

import { GetBlogs } from "../utils/queries";
import BlogList from "../components/BlogList";
import Banner from "../components/Banner";
import ListBar from "../components/navbars/ListBar";

const AllBlogs = () => {
  const { isLoading, isError, data, error } = GetBlogs();

  if (isLoading) {
    return (
      <>
        <Banner />
        <ListBar />
        <span>Loading...</span>
      </>
    );
  }

  if (isError) {
    return (
      <>
        <Banner />
        <ListBar />
        <span>Error: {error.message}</span>
      </>
    );
  }
  return (
    <>
      <Banner />
      <ListBar />
      <BlogList data={data} />
    </>
  );
};

export default AllBlogs;
