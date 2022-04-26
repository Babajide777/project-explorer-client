import React from "react";
import Layout from "./shared/Layout";
import ProfileDetails from "../components/ProfileDetails";
import { NonLoginRedirect } from "../components/LoginRediredct";

const EditProfile = () => {
  NonLoginRedirect("/login");
  return (
    <Layout>
      <ProfileDetails></ProfileDetails>
    </Layout>
  );
};

export default EditProfile;
