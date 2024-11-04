import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Form, Button } from 'react-bootstrap';

const AddingCard: React.FC = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <Card className="p-4" style={{ width: '28rem', backgroundColor: '#f2d1bd', borderRadius: '1.25rem', border: 'none', boxShadow: 'none' }}>
        <div className="d-flex">
          <div className="bg-light" style={{ width: '8rem', height: '8rem', borderRadius: '1rem', flexShrink: 0 }}></div>
          <div className="flex-grow-1 ms-4">
            <Form.Group controlId="formWishName">
                <Form.Control
                className='mb-2'
                type="text"
                placeholder="Введіть назву бажання"
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  fontSize: '1.25rem',
                }}
              />
            </Form.Group>

            <Form.Group controlId="formWishDescription">
              <Form.Control
                as="textarea"
                placeholder="Введіть опис..."
                style={{
                  backgroundColor: '#b87c61',
                  border: 'none',
                  color: 'white',
                  height: '7rem',
                  borderRadius: '1rem',
                  fontSize: '1.125rem',
                  padding: '0.75rem',
                  resize: 'none',
                }}
                maxLength={200}
                rows={3}              
              />
            </Form.Group>

            <Form.Group controlId="formWishLink" className="mt-3">
              <div className="input-group">
                <input
                  type="url"
                  placeholder="Введіть посилання..."
                  className="form-control"
                  style={{
                    borderRadius: '1rem 0 0 1rem',
                    border: 'none',
                    padding: '0.75rem',
                    fontSize: '1rem',
                  }}
                />
                <span
                  className="input-group-text"
                  style={{
                    borderRadius: '0 1rem 1rem 0',
                    backgroundColor: '#b87c61',
                    color: 'white',
                  }}
                >
                  <i className="bi bi-link" style={{ fontSize: '1rem' }}></i>
                </span>
              </div>
            </Form.Group>

            <div className="d-flex justify-content-center mt-4">
              <Button variant="primary" style={{ backgroundColor: '#b87c61', border: 'none', width: '100%' }}>
                Підтвердити
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AddingCard;
