import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ComparisonModal from './ComparisonModal';

function CardImage({ imageInfo, details }) {
  const [image, setImage] = useState(imageInfo);
  const [modal, setModal] = useState(false);
  const defaultImage = 'https://www.escapeauthority.com/wp-content/uploads/2116/11/No-image-found.jpg';
  useEffect(() => {
    setImage(imageInfo);
  }, [imageInfo]);
  function handleModal() {
    if (modal) {
      setModal(false);
    } else {
      setModal(true);
    }
  }
  function closeModal() {
    setModal(false);
  }

  return (
    <Outline>
      <ImageCard src={image.results[0].photos[0].thumbnail_url ? image.results[0].photos[0].thumbnail_url : defaultImage} alt="RelatedProductImage" />
      <Button onClick={(e) => {
        e.stopPropagation();
        handleModal();
      }}
      >
        &#9733;
      </Button>
      {modal
      && (
        <div>
          <ComparisonModal details={details} />
          <ModalBackground onClick={(e) => { e.stopPropagation(); closeModal(); }} />
        </div>
      )}
    </Outline>
  );
}

CardImage.propTypes = {
  imageInfo: PropTypes.shape({}).isRequired,
  details: PropTypes.shape({}).isRequired,
};

const Outline = styled.div`
  position: relative;
`;

const ImageCard = styled.img`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 225px;
  height: 225px;
  object-fit: fill;
  &:hover {
    opacity: 0.80;
  }
`;

const Button = styled.button`
  position: absolute;
  top: 0px;
  right: 0px;
  color: yellow;
  background-color: transparent;
  border: none;
  font-size: 25px;
  font-width: bold;
  &:hover {
    background-color: trasparent;
    opacity: 0.80;
  }
`;

const ModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0%;
  top: 0%;
`;

export default CardImage;
