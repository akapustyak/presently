import React from 'react';
import { Card } from 'react-bootstrap';

const GiftCard: React.FC = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: '18rem' }} className="text-center shadow-sm">
        <Card.Img
          variant="top"
          src="C:\Users\admin\Desktop\Presently\presently\presently-front\public\gifts.jpg"
          alt="Gift boxes"
        />
      </Card>
    </div>
  );
};

export default GiftCard;
