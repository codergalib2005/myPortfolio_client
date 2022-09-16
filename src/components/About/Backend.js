import React from "react";
import { useGetBackendSkillsQuery } from "../../features/api/apiSlice";
import LoadCard from "./LoadCard";
import Skill from "./Skill";

const Backend = () => {
  const { data, isLoading, isError } = useGetBackendSkillsQuery();
  let content = null;
  if (isLoading) {
    content = <LoadCard />;
  } else if (!isLoading && isError) {
    content = null;
  } else if (!isLoading && !isError && data?.data.length === 0) {
    content = null;
  } else if (!isLoading && !isError && data?.data.length > 0) {
    content = <Skill data={data.data} />;
  }
  return <div>{content}</div>;
};

export default Backend;
