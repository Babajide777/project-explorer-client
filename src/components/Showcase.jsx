import React, { useEffect, useState } from "react";
import { Card, CardGroup } from "react-bootstrap";
import { url } from "../auth";

const Showcase = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`${url}home`)
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
            <Card key={_id} className="col-md-6 mx-3 border border-primary">
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

export default Showcase;
