import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../App";
import CreateProjectForm from "../components/CreateProjectForm";
import Layout from "./shared/Layout";

const CreateProject = () => {
  const { isAuthenticated } = useContext(AuthContext);
  let navigate = useNavigate();
  console.log(isAuthenticated);
  if (!isAuthenticated) {
    navigate("/login");
  }

  return (
    <Layout>
      <CreateProjectForm></CreateProjectForm>
    </Layout>
  );
};

export default CreateProject;
