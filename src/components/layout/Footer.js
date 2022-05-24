import styles from './modules/Footer.module.css'
import logo from '../../img/costs_logo.png';
import { Link } from 'react-router-dom';
import {Container, Col, Row, Nav} from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';

function Footer(){
    return(
        <footer className="bg-dark py-4"> 
            <Container>
                <Row>
                    <Col className="d-flex justify-content-center justify-content-lg-start margin-bottom-mob" lg="2">
                        <Link to="/">
                            <img src={logo} alt="logo" className={`mw-100`}/>
                        </Link>
                    </Col>
                    <Col lg="7" className="d-flex justify-content-center align-items-center margin-bottom-mob">
                        <Nav className="justify-content-center" defaultActiveKey="/home" as="ul">
                            <Nav.Item as="li"> 
                                <Link 
                                className={`nav-link ${styles.LinkFooter}`}  to="/">Home</Link> 
                            </Nav.Item>
                            <Nav.Item as="li"> 
                                <Link 
                                className={`nav-link ${styles.LinkFooter}`}  to="/company">Company</Link>
                            </Nav.Item>
                            <Nav.Item as="li"> 
                                <Link 
                                className={`nav-link ${styles.LinkFooter}`}  to="/contact">Contact</Link> 
                            </Nav.Item>
                            <Nav.Item as="li"> 
                                <Link 
                                className={`nav-link ${styles.LinkFooter}`}  to="/my-projects">Projects</Link> 
                            </Nav.Item>
                            <Nav.Item as="li"> 
                                <Link 
                                className={`nav-link ${styles.LinkFooter}`}  to="/new-project">New Project</Link> 
                            </Nav.Item>
                        </Nav>

                    </Col>
                    <Col lg="3">
                        <div className="d-flex align-items-center justify-content-center h-100 w-100" >
                            <div className={`${styles.socialMedia}`}>
                                <a href="https://www.facebook.com/" target="_blank" rel='noreferrer' className="mr-2">
                                    <FaFacebook className={`${styles.socialMediaIcon}`}/>
                                </a>
                                <a href="https://www.facebook.com/" target="_blank" rel='noreferrer' className="mr-2">
                                    <FaInstagram className={`${styles.socialMediaIcon}`}/>
                                </a>
                                <a href="https://www.facebook.com/" target="_blank" rel='noreferrer'>
                                    <FaLinkedin className={`${styles.socialMediaIcon}`}/>
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