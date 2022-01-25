import React, { useEffect, useState } from "react";
import { Card, CardGroup } from "react-bootstrap";
import Layout from "./shared/Layout";

const Jumbo = () => {
  return (
    <>
      <>
        <h1>Welcome to Project Explorer</h1>
        <p>
          Project Explorer is a repository for final year projects across all
          departments at your institution. You can submit your project and
          search projects submitted by others to learn from.
        </p>
      </>
    </>
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
    <>
      <CardGroup className="showcase">
        {projects.map((project) => {
          const { abstract, authors, id, name, tags } = project;

          return (
            <Card key={id}>
              <Card.Body>
                <Card.Title>
                  <Card.Link href={`/project/${id}`}>{name}</Card.Link>
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
      <br />
    </>
  );
};

const Home = (props) => {
  return (
    <Layout us={props.us}>
      <main className="container">
        <Jumbo />
        <Showcase {...props} />
      </main>
    </Layout>
  );
};

export default Home;
