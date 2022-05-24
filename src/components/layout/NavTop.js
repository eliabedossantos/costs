import { Navbar, Nav, Container } from 'react-bootstrap';
import './modules/NavTop.module.css';
import styles from './modules/NavTop.module.css';
import { Link } from 'react-router-dom';
import logo from '../../img/costs_logo.png'
import { FaBars} from 'react-icons/fa';;
function NavTop(){
    return (
        <Navbar className="justify-content-end" bg="dark" 
        expand="lg">
        <Container>
            <Navbar.Brand>
                <Link to="/">
                    <img 
                    className="logo" 
                    src={logo} alt="logo" />
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav as="ul">
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
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );

}

export default NavTop;