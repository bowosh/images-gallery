import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ImageCard = ({ image, deleteImage }) => {
  return (
    <div style={{ margin: '2rem' }}>
      <Card style={{ backgroundColor: 'lightgrey' }}>
        <Card.Img
          style={{ height: 'auto', width: 'auto' }}
          variant="top"
          src={image.urls.small}
          alt="nix da"
        />
        <Card.Body>
          <Card.Title>{image.title.toUpperCase()}</Card.Title>
          <Card.Text>{image.description || image.alt_description}</Card.Text>
          <Button variant="primary" onClick={() => deleteImage(image.id)}>
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ImageCard;
