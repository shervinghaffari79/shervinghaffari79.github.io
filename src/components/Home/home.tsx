import React from 'react';
import { Container,Image, Row, Col, Button, NavLink } from 'react-bootstrap';
import {FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './home.module.scss';
import memoji from '../../assets/memoji1.png';
import Typewriter from 'typewriter-effect';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaGoogleScholar } from 'react-icons/fa6';

const Home: React.FC = () => {
  return (
    <Container  className={styles.container}>
      <Row style={{display:'flex' ,alignItems:'center'}}>
        <Col lg={5} className="d-flex align-content-center align-items-center justify-content-center">
          <Image 
            src={memoji} 
            alt="Shervin Ghaffari" 
            fluid 
            className={styles.profile_image}
          />
        </Col>

        <Col lg={6} style={{textAlign: 'center'}}>
          <h3>👋 Hi I'm</h3>
          <Container className="d-flex justify-content-center" style={{ fontSize: '1.4em' }}>
          <Typewriter
            options={{
              strings: ['Shervin Ghaffari'],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
              delay: 100,
              wrapperClassName: 'typewriter-wrapper',
            }}
          />
          </Container>
          <p className={styles.paragraph}>
            Computer Science Student at Amirkabir University of Technology.
          </p>
          <Button href='#Contact' className={styles.btn}>Get in touch</Button>
          <Button href=''  className={styles.btn}>Resume</Button>
          <Row className="py-3 d-flex">
          <Col className="d-flex align-items-center justify-content-center">
              <NavLink href="https://scholar.google.com/citations?hl=en&user=oo7dtBkAAAAJ" target="_blank" className={styles.social_icon}>
                <FaGoogleScholar />
              </NavLink>
              <NavLink href="https://github.com/shervinghaffari79" target="_blank" className={styles.social_icon}>
                <FaGithub />
              </NavLink>
              <NavLink href="https://www.linkedin.com/in/shervin-ghaffari" target="_blank" className={styles.social_icon}>
                <FaLinkedin />
              </NavLink>
              <NavLink href="mailto:mailto:shervinghaffari79@gmail.com" className={styles.social_icon}>
                  <FaEnvelope />
              </NavLink>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;