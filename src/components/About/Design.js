import React from "react";
import { useGetDesignSkillsQuery } from "../../features/api/apiSlice";
import LoadCard from "./LoadCard";
import Skill from "./Skill";

const Design = () => {
  const { data, isLoading, isError } = useGetDesignSkillsQuery();
  let content = null;
  if (isLoading) {
    content = <LoadCard />;
  } else if (!isLoading && isError) {
    content = null;
  } else if (!isLoading && !isError && data?.data.length === 0) {
    content = null;
  } else if (!isLoading && !isError && data?.data.length > 0) {
    content = <Skill data={data.data} type="design" />;
  }
  return <div>{content}</div>;
};

export default Design;
