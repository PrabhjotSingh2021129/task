import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const BookingForm = ({ show }) => {
  const [formData, setFormData] = useState({
    movieName: show.name,
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form submitted:', formData);
  };

  return (
    <div className="booking-form p-4 border rounded shadow-lg">
      <h4 className="mb-4 text-center">Book Movie Ticket</h4>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group controlId="movieName">
          <Form.Control
            type="text"
            name="movieName"
            value={formData.movieName}
            readOnly
            className="form-control-lg mb-4"
          />
        </Form.Group>
        {/* Add other form fields here */}
        <Button
          variant="primary"
          type="submit"
          className="btn-lg btn-block mt-4"
        >
          Book Now
        </Button>
      </Form>
    </div>
  );
};

export default BookingForm;
