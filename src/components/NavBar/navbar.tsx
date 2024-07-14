import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import styles from './navbar.module.scss';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar 
      expand="lg" 
      bg="transparent" 
      variant="dark" 
      className={styles.overlayNavbar}
    >
      <Container style={{fontSize: '20px !important', fontWeight: '500 !important', alignContent:'center !important'}}>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className={styles.navbarToggler}
          onClick={toggleNavbar}
          style={{ border: 'none !important' }}
        >
          <div className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Navbar.Toggle>
        <Navbar.Collapse className="justify-content-center" id="basic-navbar-nav">
          <Nav>
            <Nav.Link className={styles.nav_link} href="#Home">Home</Nav.Link>
            <Nav.Link className={styles.nav_link} href="#About">About</Nav.Link>
            <Nav.Link className={styles.nav_link} href="#Projects">Projects</Nav.Link>
            <Nav.Link className={styles.nav_link} href="#Publications">Publications</Nav.Link>
            <Nav.Link className={styles.nav_link} href="#Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;