import React from "react";
import { useGetStructureSkillsQuery } from "../../features/api/apiSlice";
import LoadCard from "./LoadCard";
import Skill from "./Skill";

const Structure = () => {
  const { data, isLoading, isError } = useGetStructureSkillsQuery();
  let content = null;
  if (isLoading) {
    content = <LoadCard />;
  } else if (!isLoading && isError) {
    content = null;
  } else if (!isLoading && !isError && data?.data.length === 0) {
    content = null;
  } else if (!isLoading && !isError && data?.data.length > 0) {
    content = <Skill data={data.data} type="structure" />;
  }
  return <div>{content}</div>;
};

export default Structure;
