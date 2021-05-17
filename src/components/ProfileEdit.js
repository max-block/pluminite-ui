import React, { useContext } from 'react';
import styled from 'styled-components';

import defaultProfilePicture from '../assets/default-profile-picture.png';
import Balance from './NavigationComponents/Balance';
import Button from './common/Button';
import { Textarea } from './common/forms';

import { NearContext } from '../contexts';

const bioMaxLength = 160;

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 767px;
  padding: 100px 28px 120px;

  > * {
    margin: 0 0 25px;
  }

  .summary {
    display: flex;
    flex-direction: row;
    align-items: center;

    > * {
      margin-right: 40px;
    }

    .picture {
      width: 62px;
      height: 62px;
      border-radius: 100%;
    }
  }

  @media (min-width: 767px) {
    margin: 0 auto;
    align-items: center;

    > * {
      margin: 0 0 50px;
    }

    textarea {
      width: 700px;
      max-width: 700px;
      min-width: 700px;
    }
  }
`;

export default function Profile() {
  const { user } = useContext(NearContext);

  return (
    <Container>
      <div className="summary">
        <img className="picture" src={defaultProfilePicture} alt="profile picture" width="62" height="62" />
        <div className="profile">
          <p>{user.accountId}</p>
          <Button isPrimary>Change Profile Picture</Button>
        </div>
      </div>
      <Textarea name="bio" labelText="Bio" rows={4} maxLength={bioMaxLength} />
      <p>Your Funds</p>
      <Balance />
    </Container>
  );
}
