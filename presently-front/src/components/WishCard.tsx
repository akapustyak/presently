import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { AiOutlineLink, AiOutlineCheck } from 'react-icons/ai';

interface WishCardProps {
  title: string;
  description: string;
}

const WishCard: React.FC<WishCardProps> = ({ title, description }) => {
  return (
    <div className="wish-card d-flex justify-content-center">
      <Card
        className="d-flex flex-row align-items-center p-3 position-relative"
        style={{ backgroundColor: '#d7a58e', borderRadius: '1rem', maxWidth: '70%' }}
      >
        <div className="col-6 d-flex justify-content-center align-items-center">
          <div
            className="position-relative d-flex justify-content-center align-items-center"
            style={{
              width: '17rem',
              height: '17rem',
              border: '0.2vw solid #007aff',
              borderRadius: '1rem',
              backgroundColor: '#ffffff',
              marginRight: '1rem'
            }}
          >
            <div
              className="position-absolute d-flex justify-content-center align-items-center"
              style={{
                width: '25%',
                height: '25%',
                backgroundColor: '#a36b5c',
                borderRadius: '50%',
                bottom: '-10%',
                right: '-10%'
              }}
            >
              <AiOutlineLink color="white" size={48} />
            </div>
          </div>
        </div>

        <div className="col-6 d-flex flex-column">
          <h5 style={{ color: '#37452e', fontSize: '1.2em', wordWrap: 'break-word' }}>{title}</h5>
          <p style={{ color: '#37452e', fontSize: '0.9em', wordWrap: 'break-word' }}>{description}</p>
        </div>

        <div
          className="position-absolute d-flex justify-content-center align-items-center"
          style={{
            width: '5rem',
            height: '5rem',
            backgroundColor: '#b5002b',
            borderRadius: '50%',
            bottom: '-7%',
            right: '-3%'
          }}
        >
          <AiOutlineCheck color="white" size={70}/>
        </div>
      </Card>
    </div>
  );
};

export default WishCard;
