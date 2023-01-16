import React from 'react'
// import { Link } from 'react-router-dom'
import {Navbar,Container, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'


const Header = () => {
  return (
    <header>    
      <Navbar bg="dark" variant="dark"> 
        <Container>
          <Navbar.Brand href="/">DEMO</Navbar.Brand>
          <Nav className="header-navbar me-auto"> 
          <LinkContainer to="/users">
          <Nav.Link ><i className='fas fa-diagram-project'></i> Users</Nav.Link> 
          </LinkContainer>
          <LinkContainer to='/albums'>
            <Nav.Link><i className='fas fa-file-invoice'></i> Albums</Nav.Link> 
          </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
  </header>
  ) 
}

export default Header 
