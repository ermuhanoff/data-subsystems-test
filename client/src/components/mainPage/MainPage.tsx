import React from 'react';
import { CardBody } from '../cardBody';

export const MainPage = () => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CardBody />
    </div>
  );
};
