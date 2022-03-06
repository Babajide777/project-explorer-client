import CreateProjectForm from "../components/CreateProjectForm";
import Layout from "./shared/Layout";

const CreateProject = (props) => {
  return (
    <Layout us={props.us}>
      <CreateProjectForm></CreateProjectForm>
    </Layout>
  );
};

export default CreateProject;
