import React from 'react';
import { Card } from 'react-bootstrap';

const GiftCard: React.FC = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center vh-10 mb-5"
      style={{ backgroundColor: '#A67C63' }}
    >
      <div style={{padding: '1rem' }}>
        <Card style={{ width: '100%' }} className="text-center shadow-sm">
          <Card.Img
            variant="top"
            src="/gifts.jpg"
            alt="Gift boxes"
            style={{ height: '20rem', objectFit: 'cover' }}
          />
        </Card>
      </div>
    </div>
  );
};

export default GiftCard;
