import React from "react";
import { useGetToolsSkillsQuery } from "../../features/api/apiSlice";
import LoadCard from "./LoadCard";
import Skill from "./Skill";

const Tools = () => {
  const { data, isLoading, isError } = useGetToolsSkillsQuery();
  let content = null;
  if (isLoading) {
    content = <LoadCard />;
  } else if (!isLoading && isError) {
    content = null;
  } else if (!isLoading && !isError && data?.data.length === 0) {
    content = null;
  } else if (!isLoading && !isError && data?.data.length > 0) {
    content = <Skill data={data.data} type="tools" />;
  }
  return <div>{content}</div>;
};

export default Tools;
