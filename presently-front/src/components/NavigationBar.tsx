import React, { useState } from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import { FaClipboardCheck, FaSearch } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa6';
import Logo from './Logo';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const IconButton = styled(Button)`
  background-color: #A60321;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
`;

const SearchForm = styled(Form)`
  display: flex;
  flex-grow: 2;
  mx-3;
  justify-content: center;
`;

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
`;

const SearchIcon = styled(FaSearch)`
  position: absolute;
  top: 50%;
  left: 0.5rem;
  transform: translateY(-50%);
  color: #A60321;
`;

const SearchInput = styled(FormControl)`
  padding-left: 2.5rem;
  border-radius: 1rem;
  background-color: #f6f6f6;
  border: none;
  height: 2.5rem;
`;

const NavigationBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (searchQuery.trim()) {
      navigate("/homepage", {replace:true});
      navigate(`/profilepage/${searchQuery}`, { replace: true });
    }
  };

  return (
    <Navbar expand="lg" style={{ padding: '1rem', backgroundColor: '#DBDBDB' }}>
      <Container className="d-flex justify-content-around align-items-center flex-row py-2">
        <div className="d-flex align-items-center flex-grow-1 me-3"> 
          <Nav.Link href="/homepage" className="d-flex align-items-center me-2"> 
            <IconButton>
              <FaClipboardCheck style={{ color: '#FFFFFF', fontSize: '2rem' }} />
            </IconButton>
          </Nav.Link>
          
          <Logo fontSize="1.8rem" />
        </div>

        <SearchForm onSubmit={handleSearchSubmit}> 
          <SearchContainer>
            <SearchIcon />
            <SearchInput
              type="search"
              aria-label="Search"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </SearchContainer>
        </SearchForm>

        <Nav.Link href="/profilepage" className="d-flex align-items-center flex-grow-1 justify-content-end ms-3"> 
          <IconButton>
            <FaUser style={{ color: '#FFFFFF', fontSize: '1.2rem' }} />
          </IconButton>
        </Nav.Link>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
