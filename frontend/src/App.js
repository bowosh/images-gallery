import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Search from './components/Search';
import ImageCard from './components/imagecard';
import Welcome from './components/Welcome';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

const App = () => {
  const [word, setWord] = useState('');
  const [images, setImages] = useState([]);

  console.log(images);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`
    )
      .then((res) => res.json())

      .then((data) => {
        setImages([{ ...data, title: word }, ...images]);
      })
      .catch((err) => {
        console.log(err);
      });

    setWord('');
  };

  const handleDeleteImage = (id) => {
    setImages(images.filter((image) => image.id !== id));
  };

  const handleCloneImage = (id) => {
    for (let i = 0; i < images.length; i++) {
      if (images[i].id === id) {
        var arrayposition = i;
      }
    }
    setImages([images[arrayposition], ...images]);
  };

  return (
    <div>
      <Header title="Just another Web App"></Header>
      <Search
        word={word}
        setWord={setWord}
        handleSubmit={handleSearchSubmit}
      ></Search>
      <Container>
        {images.length > 0 ? (
          <Row xs={1} md={2} lg={3}>
            {images.map((image, i) => (
              <Col>
                <ImageCard
                  key={i}
                  image={image}
                  deleteImage={handleDeleteImage}
                  cloneImage={handleCloneImage}
                ></ImageCard>
              </Col>
            ))}
          </Row>
        ) : (
          <Welcome></Welcome>
        )}
      </Container>
    </div>
  );
};

export default App;
