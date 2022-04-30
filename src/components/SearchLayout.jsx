import React, { useEffect, useRef, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { url } from "../auth";
import { Card, CardGroup, Pagination } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const SearchLayout = () => {
  const searchTerm = useRef(null);
  const searchType = useRef(null);
  const [searchPages, setSearchPages] = useState(0);
  const [totalSearchCount, setTotalSearchCount] = useState(0);
  const [returnedSearchResult, setReturnedSearchResult] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchterm, setSearchterm] = useState("");
  const [searchtype, setSearchtype] = useState("");
  const [searchParams] = useSearchParams();
  const [noSearchDisplay, setNoSearchDisplay] = useState("d-none");

  useEffect(() => {
    const theTerm = searchParams.get("searchterm");
    const theType = searchParams.get("searchtype");
    const thePage = searchParams.get("page");
    let theUrl;

    thePage
      ? (theUrl = `${url}project/search/?searchterm=${theTerm}&searchtype=${theType}&page=${thePage}`)
      : (theUrl = `${url}project/search/?searchterm=${theTerm}&searchtype=${theType}`);

    fetch(theUrl)
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          setReturnedSearchResult(res.data.returnedSearchResult);
          setTotalSearchCount(res.data.totalSearchCount);
          setSearchPages(res.data.searchPages);
          setCurrentPage(res.data.currentPage);
          setSearchterm(res.data.searchterm);
          setSearchtype(res.data.searchtype);
          setNoSearchDisplay("d-none");
        } else {
          setReturnedSearchResult([]);
          setSearchPages(0);
          setTotalSearchCount(0);
          setCurrentPage(1);
          setNoSearchDisplay("text-primary");
        }
      })
      .catch((err) => console.log(err));
  }, [searchParams]);

  let hrefPrevious = `/search/?searchterm=${searchterm}&searchtype=${searchtype}&page=${
    currentPage - 1
  }`;

  let hrefNext = `/search/?searchterm=${searchterm}&searchtype=${searchtype}&page=${
    currentPage + 1
  }`;

  const handleSubmit = (e) => {
    e.preventDefault();
    setNoSearchDisplay("d-none");
    fetch(
      `${url}project/search/?searchterm=${searchTerm.current.value}&searchtype=${searchType.current.value}`
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          setReturnedSearchResult(res.data.returnedSearchResult);
          setTotalSearchCount(res.data.totalSearchCount);
          setSearchPages(res.data.searchPages);
          setCurrentPage(res.data.currentPage);
          setSearchterm(res.data.searchterm);
          setSearchtype(res.data.searchtype);
        } else {
          setReturnedSearchResult([]);
          setSearchPages(0);
          setTotalSearchCount(0);
          setCurrentPage(1);
          setNoSearchDisplay("text-primary");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="mx-auto w-75 ">
        <h1 className="text-primary mb-4 mt-4">Project Gallery</h1>
        <Form className="bg-light p-3">
          <Row className="align-items-center">
            <Col className="col-7">
              <Form.Control
                placeholder="Search project name, authors, abstarct, tags"
                ref={searchTerm}
              />
            </Col>
            <Col>
              <Button variant="outline-secondary">Search By</Button>
            </Col>
            <Col>
              <Form.Select aria-label="Search Options" ref={searchType}>
                <option value="name">Name</option>
                <option value="abstract">Abstract</option>
                <option value="authors">Authors</option>
                <option value="tags">Tags</option>
              </Form.Select>
            </Col>
            <Col>
              <Button type="submit" onClick={handleSubmit}>
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </div>

      <section className="container mt-4 mb-5">
        <h5 className=" text-primary mb-3">
          All projects <span>({totalSearchCount} results)</span>
        </h5>

        <h3 className={noSearchDisplay}>No search result returned</h3>

        <CardGroup className="showcase mx-5">
          {returnedSearchResult.map((project) => {
            const { abstract, authors, _id, name, tags, lastVited } = project;

            return (
              <Card
                key={_id}
                style={{ maxWidth: "18rem" }}
                className="mx-3 border border-primary"
              >
                <Card.Body>
                  <Card.Title>
                    <Card.Link href={`/project/${_id}`}>{name}</Card.Link>
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {authors?.map((auz, i) => {
                      return (
                        <>
                          <small key={i}>{auz}, </small>
                        </>
                      );
                    })}
                  </Card.Subtitle>
                  <Card.Text>{abstract.substring(0, 100)}...</Card.Text>
                  <p className="text-muted fs-6">
                    Last visited {new Date(lastVited).toLocaleDateString()}
                  </p>
                  <Card.Link href="#">
                    {tags?.map((auz, i) => {
                      return (
                        <>
                          <small key={i}>#{auz}, </small>
                        </>
                      );
                    })}
                  </Card.Link>
                </Card.Body>
              </Card>
            );
          })}
        </CardGroup>
      </section>

      <div className="container d-flex justify-content-center">
        {searchPages <= 0 ? (
          <></>
        ) : (
          <Pagination>
            <Pagination.Prev
              href={hrefPrevious}
              className={currentPage === 1 ? "disabled" : ""}
            />
            <Pagination.Item>
              page {currentPage} of {searchPages}
            </Pagination.Item>
            <Pagination.Next
              href={hrefNext}
              className={currentPage === searchPages ? "disabled" : ""}
            />
          </Pagination>
        )}
      </div>
    </>
  );
};

export default SearchLayout;
