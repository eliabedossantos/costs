import styles from './modules/Footer.module.css'
import logo from '../../img/costs_logo.png';
import { Link } from 'react-router-dom';
import {Container, Col, Row, Nav} from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';

function Footer(){
    return(
        <footer className={styles.Footer}> 
            <Container>
                <Row>
                    <Col lg="2">
                        <Link to="/">
                            <img src={logo} alt="logo" className={`mw-100`}/>
                        </Link>
                    </Col>
                    <Col lg="7" className="d-flex justify-content-center align-items-center">
                        <Nav defaultActiveKey="/home" as="ul">
                            <Nav.Item as="li"> 
                                <Link 
                                className={`nav-link ${styles.LinkNavbar}`}  to="/">Home</Link> 
                            </Nav.Item>
                            <Nav.Item as="li"> 
                                <Link 
                                className={`nav-link ${styles.LinkNavbar}`}  to="/company">Company</Link>
                            </Nav.Item>
                            <Nav.Item as="li"> 
                                <Link 
                                className={`nav-link ${styles.LinkNavbar}`}  to="/contact">Contact</Link> 
                            </Nav.Item>
                            <Nav.Item as="li"> 
                                <Link 
                                className={`nav-link ${styles.LinkNavbar}`}  to="/my-projects">Projects</Link> 
                            </Nav.Item>
                            <Nav.Item as="li"> 
                                <Link 
                                className={`nav-link ${styles.LinkNavbar}`}  to="/new-project">New Project</Link> 
                            </Nav.Item>
                        </Nav>

                    </Col>
                    <Col lg="3">
                        <div className="d-flex align-items-center justify-content-center" >
                            <div className={`${styles.socialMedia}`}>
                                <a href="#" target="_blank">
                                    <FaFacebook className={`${styles.socialMediaIcon}`}/>
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>



    );
}

export default Footer;