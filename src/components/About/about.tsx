import React from 'react';
import { Image, Container, Row, Col } from 'react-bootstrap';
import styles from './about.module.scss';
import memoji from '../../assets/worker.gif';

const AboutMe = () => {
  return (
    <Container className={styles.container}>
      <Row className="justify-content-center">
        <Col md={8}>
          <p className={styles.subtitle}>Get to know more</p>
          <h1 className={styles.aboutMe}>About Me</h1>
        </Col>
      </Row>
      <Row className={`mt-4 ${styles.contentRow}`} style={{alignItems:'center', paddingBottom:'100px'}}>
        <Col lg={5} className={styles.imageColumn}>
          <Image src={memoji} 
            fluid className={styles.profileImage} />
        </Col>
        <Col lg={7} className={styles.description}>
          <p className={`${styles.description}`}>
          I recently graduated with a bachelor's degree in Computer Science from the prestigious Amirkabir University of Technology, achieving a remarkable GPA of 18.50/20. My academic journey involved engaging in diverse and challenging projects across several domains, including Machine Learning, Software Development, Algorithm Design, Data Mining, and Web Engineering. These experiences have significantly enhanced my knowledge and skills in these areas. Last summer, I authored a survey paper on the potential use cases of Generative AI in e-commerce, which I had the honor of presenting at the 20th International Symposium of Artificial Intelligence and Signal Processing. This project was a testament to my ability to apply theoretical knowledge to practical, real-world problems. In addition to my technical expertise, I have continuously worked on improving my soft skills. I believe these interpersonal skills are crucial in achieving my career objectives and excelling in collaborative environments.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;