import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { HeadingText } from '../common/typography';
import Button from '../common/Button';
import ArtDropzone from '../common/ArtDropzone';

const Container = styled('div')`
  max-width: 600px;
  margin: 0 auto;
  width: 100%;

  .button-bottom {
    position: fixed;
    display: flex;
    justify-content: center;
    bottom: 0;
    right: 0;
    left: 0;
    padding: 20px 13px;
    background-color: var(--plum);
    box-shadow: 0 0 74px rgba(190, 20, 205, 0.45);

    button {
      width: 100%;
      max-width: 400px;
    }
  }
`;

const MintUpload = ({ onUpload, onCompleteLink }) => {
  return (
    <Container>
      <HeadingText>Upload Art</HeadingText>
      <ArtDropzone onUpload={onUpload} />
      <div className="button-bottom">
        <Button isPrimary isLink>
          <Link to={onCompleteLink}>Last Step: Review</Link>
        </Button>
      </div>
    </Container>
  );
};

MintUpload.propTypes = {
  onUpload: PropTypes.func,
  onCompleteLink: PropTypes.string,
};

export default MintUpload;