import React, { useState } from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import { FaClipboardCheck, FaSearch } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa6';
import Logo from './Logo';
import { replace, useNavigate } from 'react-router-dom';

const iconButtonStyle = {
  backgroundColor: '#A60321',
  borderRadius: '50%',
  width: '2.5rem',
  height: '2.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none'
};

const NavigationBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (searchQuery.trim()) {
      navigate("/homepage", {replace:true})
      navigate(`/profilepage/${searchQuery}`, { replace: true });
    }
  };

  return (
    <Navbar expand="lg" style={{ padding: '1rem', backgroundColor: '#DBDBDB' }}>
      <Container className="d-flex justify-content-around align-items-center flex-row py-2">
        <div className="d-flex align-items-center flex-grow-1 me-3"> 
            <Nav.Link href="/homepage" className="d-flex align-items-center me-2"> 
            <Button style={iconButtonStyle}>
                <FaClipboardCheck style={{ color: '#FFFFFF', fontSize: '2rem' }} />
            </Button>
            </Nav.Link>
            
            <Logo fontSize="1.8rem" />
        </div>

        <Form className="d-flex flex-grow-2 mx-3 justify-content-center" onSubmit={handleSearchSubmit}> 
            <div style={{ position: 'relative', width: '100%' }}>
            <FaSearch
                style={{
                position: 'absolute',
                top: '50%',
                left: '0.5rem',
                transform: 'translateY(-50%)',
                color: '#A60321',
                }}
            />
            <FormControl
                type="search"
                aria-label="Search"
                value={searchQuery}
                onChange={handleSearchChange}
                style={{
                paddingLeft: '2.5rem',
                borderRadius: '1rem',
                backgroundColor: '#f6f6f6',
                border: 'none',
                height: '2.5rem',
                }}
            />
            </div>
        </Form>

        <Nav.Link href="/profilepage" className="d-flex align-items-center flex-grow-1 justify-content-end ms-3"> 
            <Button style={iconButtonStyle}>
            <FaUser style={{ color: '#FFFFFF', fontSize: '1.2rem' }} />
            </Button>
        </Nav.Link>
        </Container>
    </Navbar>
  );
};

export default NavigationBar;
