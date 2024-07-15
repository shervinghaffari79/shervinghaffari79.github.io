import React from 'react';
import { Image, Carousel, Col, Container, Row, Button } from 'react-bootstrap';
import styles from './projects.module.scss';

// Import all project images
import game from '../../assets/candycrush.png';
import mpso from '../../assets/mpso.png';
// import clientserver from '../../assets/clientserver.png';
import nqueen from '../../assets/nqueen.png';
import monopoly from '../../assets/monopoly.png';
import sudoku from '../../assets/sudoku.png';
import trello from '../../assets/trello.png';
// import perceptron from '../../assets/perceptron.png';
import mlp from '../../assets/mlp.png';
import encdec from '../../assets/encdec.png';
import gan from '../../assets/gan.png';
import kan from '../../assets/kan.png';

const projects = [
  { 
    title: "Candy Crush", 
    image: game, 
    link: "https://github.com/shervinghaffari79/Candy_Crush",
    description: `This React-based implementation of the popular Candy Crush game showcases interactive gameplay and vibrant graphics. The project demonstrates proficiency in front-end development, state management, and game logic implementation using modern web technologies.

    Key features include dynamic board generation, match-three mechanics, special candy creation, and score tracking.`
  },
  { 
    title: "MPSO CNN", 
    image: mpso, 
    link: "https://github.com/shervinghaffari79/MPSO_CNN",
    description: `The MPSO CNN project combines Convolutional Neural Networks (CNNs) with Multi-Particle Swarm Optimization (MPSO) to enhance image classification tasks. This innovative approach leverages the power of swarm intelligence to optimize the architecture and hyperparameters of CNNs, resulting in improved performance and efficiency.

    The implementation showcases advanced machine learning techniques, including custom layer design, adaptive learning rates, and particle position updating strategies.`
  },
  { 
    title: "N-Queen", 
    image: nqueen, 
    link: "https://github.com/shervinghaffari79/MPSO_CNN",
    description: `The N-Queen project presents an elegant solution to the classic chess problem of placing N queens on an N×N chessboard so that no two queens threaten each other. This implementation showcases strong algorithmic problem-solving skills and optimization techniques.

    The solution employs backtracking with intelligent pruning to efficiently explore the solution space. Additionally, it includes visualizations of the solving process and final configurations, making it an excellent educational tool for understanding recursion and constraint satisfaction problems.`
  },
  { 
    title: "Monopoly", 
    image: monopoly, 
    link: "https://github.com/shervinghaffari79/MPSO_CNN",
    description: `This digital adaptation of the classic Monopoly board game showcases comprehensive game development skills and object-oriented programming principles. The implementation features a fully functional game engine that accurately simulates all aspects of Monopoly gameplay, including property management, financial transactions, and chance events.

    The project incorporates a user-friendly interface with intuitive controls and real-time game state visualization. Advanced features include AI players with different strategies, multiplayer support over a network, and customizable game rules.`
  },
  { 
    title: "Sudoku", 
    image: sudoku, 
    link: "https://github.com/shervinghaffari79/MPSO_CNN",
    description: `This Sudoku project combines a powerful puzzle solver with an intelligent generator, showcasing advanced algorithm design and constraint satisfaction techniques. The solver utilizes backtracking with forward checking and heuristics to efficiently solve even the most challenging Sudoku puzzles.

    The puzzle generator employs a unique approach, creating valid, unique Sudoku puzzles with varying difficulty levels. It includes features such as symmetry options and difficulty estimation based on solving techniques required.`
  },
  { 
    title: "Trello", 
    image: trello, 
    link: "https://github.com/shervinghaffari79/MPSO_CNN",
    description: `This Trello-like task management application demonstrates full-stack development proficiency, combining a responsive front-end with a robust back-end infrastructure. The system allows users to create boards, lists, and cards, facilitating effective project management and team collaboration.

    Key features include real-time updates using WebSocket technology, drag-and-drop functionality for intuitive task organization, and user authentication with role-based access control. The application also incorporates data persistence, search functionality, and integrations with external services.`
  },
  { 
    title: "MLP", 
    image: mlp, 
    link: "https://github.com/shervinghaffari79/MPSO_CNN",
    description: `The Multi-Layer Perceptron (MLP) project extends the concept of single perceptrons to create a powerful neural network capable of handling complex, non-linear classification and regression tasks. This implementation showcases a deep understanding of backpropagation, activation functions, and neural network architectures.

    Key features include support for various layer configurations, multiple activation functions (e.g., ReLU, sigmoid, tanh), and different optimization algorithms such as stochastic gradient descent and Adam. The project also incorporates techniques like dropout and batch normalization to improve generalization.`
  },
  { 
    title: "Encoder Decoder", 
    image: encdec, 
    link: "https://github.com/shervinghaffari79/MPSO_CNN",
    description: `This Encoder-Decoder model implementation tackles sequence-to-sequence tasks such as machine translation, text summarization, and image captioning. The project demonstrates advanced understanding of recurrent neural networks (RNNs) and attention mechanisms in deep learning.

    The implementation features both LSTM and GRU variants for the encoder and decoder, along with different attention mechanisms (e.g., Bahdanau, Luong). It includes beam search decoding for improved output quality and supports handling of variable-length input and output sequences.`
  },
  { 
    title: "Generative Adversarial Network", 
    image: gan, 
    link: "https://github.com/shervinghaffari79/MPSO_CNN",
    description: `This Generative Adversarial Network (GAN) project showcases the implementation of one of the most exciting developments in deep learning for generating realistic synthetic data. The project demonstrates a thorough understanding of adversarial training and its applications in various domains such as image generation, style transfer, and data augmentation.

    The implementation includes different GAN architectures (e.g., DCGAN, WGAN, StyleGAN) and explores techniques to stabilize GAN training, such as spectral normalization and gradient penalty. It features interactive visualizations of the generated samples during training and provides tools for interpolation in the latent space.`
  },
  { 
    title: "Kolmogorov-Arnold Network", 
    image: kan, 
    link: "https://github.com/shervinghaffari79/MPSO_CNN",
    description: `The Kolmogorov-Arnold Network (KAN) project implements a unique neural network architecture inspired by the Kolmogorov-Arnold representation theorem.
    Key features of the project include adaptive node creation, hierarchical structure optimization, and specialized activation functions derived from the theorem.`
  },
];

const ProjectsSlider = () => {
  return (
    <Container className={styles.container}>
      <p className={styles.subtitle}>Browse My Recent</p>
      <Row className="justify-content-center">
        <h1 className={styles.projects}>Projects</h1>
      </Row>
      <Row style={{ paddingBottom: '60px' }}>
        <Carousel controls={false} indicators={false}>
          {projects.map((project, index) => (
            <Carousel.Item key={index}>
              <Row className={styles.contentRow}>
                <Col lg={5} className={styles.contentCol}>
                  <Image
                    className={styles.profileImage}
                    src={project.image}
                    alt={project.title}
                    thumbnail
                  />
                </Col>
                <Col lg={7} className={styles.contentCol}>
                  <h3 className="mb-4">{project.title}</h3>
                  <p className={`${styles.paragraph} mb-4`}>
                    {project.description}
                  </p>
                  <Button href={project.link} className={styles.btn}>View Project</Button>
                </Col>
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Row>
    </Container>
  );
};

export default ProjectsSlider;