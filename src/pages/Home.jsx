import React, { useEffect, useState } from "react";
import { Card, CardGroup } from "react-bootstrap";
import Layout from "./shared/Layout";

const Jumbo = () => {
  return (
    <section class="p-5 mb-4 bg-light rounded-3 container">
      <div class="container-fluid py-2">
        <h1 class="display-5 fw-bold text-primary">
          Welcome to Project Explorer
        </h1>
        <p class="col-md-8 fs-4">
          A repository for final year projects across all departments in the
          university. You can submit your project and/or search for projects
          submitted by others.
        </p>
      </div>
    </section>
  );
};

const Showcase = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/home")
      .then((res) => res.json())
      .then((res) => setProjects(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="container">
      <CardGroup className="showcase">
        {projects.map((project) => {
          const { abstract, authors, _id, name, tags } = project;

          return (
            <Card key={_id} border="primary" className="col-md-6">
              <Card.Body>
                <Card.Title>
                  <Card.Link href={`/project/${_id}`}>{name}</Card.Link>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {authors}
                </Card.Subtitle>
                <Card.Text>{abstract.substring(0, 100)}...</Card.Text>
                <Card.Link href="#">{tags}</Card.Link>
              </Card.Body>
            </Card>
          );
        })}
      </CardGroup>
    </section>
  );
};

const Home = (props) => {
  return (
    <Layout us={props.us}>
      <Jumbo />
      <Showcase />
    </Layout>
  );
};

export default Home;
