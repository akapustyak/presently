import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Form, Button } from 'react-bootstrap';

const AddingCard: React.FC = () => {
  const [wishName, setWishName] = useState('');
  const [wishDescription, setWishDescription] = useState('');
  const [wishLink, setWishLink] = useState('');

  const handleAddWish = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/wishes/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
          name: wishName,
          description: wishDescription,
          link: wishLink,
          image: null,
        }),
      }); 
      
      console.log(wishName)
      if (response.ok) {
        setWishName('');
        setWishDescription('');
        setWishLink('');
        alert('Бажання додано успішно!');
      } else {
        console.error('Failed to add wish');
      }
    } catch (error) {
      console.error('Error adding wish:', error);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <Card className="p-4" style={{ width: '28rem', backgroundColor: '#f2d1bd', borderRadius: '1.25rem', border: 'none', boxShadow: 'none' }}>
        <div className="d-flex">
          <div className="bg-light" style={{ width: '8rem', height: '8rem', borderRadius: '1rem', flexShrink: 0 }}></div>
          <div className="flex-grow-1 ms-4">
            <Form.Group controlId="formWishName">
              <Form.Control
                className="mb-2"
                type="text"
                placeholder="Введіть назву бажання"
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  fontSize: '1.25rem',
                }}
                value={wishName}
                onChange={(e) => setWishName(e.target.value)}
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
                value={wishDescription}
                onChange={(e) => setWishDescription(e.target.value)}
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
                  value={wishLink}
                  onChange={(e) => setWishLink(e.target.value)}
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
              <Button
                variant="primary"
                style={{ backgroundColor: '#b87c61', border: 'none', width: '100%' }}
                onClick={handleAddWish}
              >
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
