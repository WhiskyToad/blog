import React from "react";

import { GetCategory } from "../utils/queries";
import BlogList from "../components/BlogList";
import Banner from "../components/Banner";
import ListBar from "../components/navbars/ListBar";

const Category = (props) => {
  const category = props.match.params.id;
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const { isLoading, isError, data, error } = GetCategory(category, config);

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

export default Category;
