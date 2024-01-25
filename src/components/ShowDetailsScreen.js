// ShowDetailsScreen.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import BookingForm from "./BookingForm";

const ShowDetailsScreen = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setShow(data);
      })
      .catch((error) => {
        console.error("Error fetching show details:", error);
      });
  }, [id]);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Show Details</h2>
      {show && (
        <div className="bg-light rounded p-4">
          <img
            src={show.image?.original}
            className="img-fluid mx-auto d-block"
            alt={show.name}
            style={{
              maxHeight: "600px",
              width: "100%",
              objectFit: "cover",
              objectPosition: "90% 20%",
            }}
          />
          <h3 className="text-center mb-3" style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#333" }}>
            {show.name}
          </h3>
          <p className="text-justify" dangerouslySetInnerHTML={{ __html: show.summary }} />
          <div className="text-center mt-3">
            <BookingForm show={show} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowDetailsScreen;
