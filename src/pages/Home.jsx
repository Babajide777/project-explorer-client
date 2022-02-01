import React from "react";
import Jumbo from "../components/Jumbo";
import Showcase from "../components/Showcase";
import Layout from "./shared/Layout";

const Home = (props) => {
  return (
    <Layout us={props.us}>
      <Jumbo></Jumbo>
      <Showcase></Showcase>
    </Layout>
  );
};

export default Home;
