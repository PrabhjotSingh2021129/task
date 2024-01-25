import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Button, Col, Row } from "react-bootstrap";

const MainScreen = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => response.json())
      .then((data) => {
        setShows(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="container mt-4" style={{ backgroundColor: "#f8f9fa" }}>
      <h1 className="text-center mb-4 text-primary">TV Shows</h1>
      <Row className="justify-content-center">
        {shows.map((show) => (
          <Col key={show.show.id} md={4} className="mb-4">
            <Card className="shadow-lg" style={{ backgroundColor: "#ffffff" }}>
              <Card.Img
                variant="top"
                src={show.show.image?.medium}
                className="img-fluid"
                style={{ width: "100%", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title className="text-center text-dark">
                  {show.show.name}
                </Card.Title>
                <Link to={`/show/${show.show.id}`}>
                  <Button variant="primary" className="w-100 mt-3">
                    Details
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MainScreen;
