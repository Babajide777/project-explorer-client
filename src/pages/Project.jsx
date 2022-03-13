import React from "react";
import ProjectLayout from "../components/ProjectLayout";
import Layout from "./shared/Layout";

const Project = (props) => {
  return (
    <Layout us={props.us}>
      <ProjectLayout></ProjectLayout>
    </Layout>
  );
};

export default Project;
