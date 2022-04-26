import CreateProjectForm from "../components/CreateProjectForm";
import NonLoginRedirect from "../NonLoginRedirect";
import Layout from "./shared/Layout";

const CreateProject = () => {
  NonLoginRedirect("/login");
  return (
    <Layout>
      <CreateProjectForm></CreateProjectForm>
    </Layout>
  );
};

export default CreateProject;
