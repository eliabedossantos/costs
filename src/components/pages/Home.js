//General
import { Link } from 'react-router-dom';

// Layout
import { Container, Row, Col } from 'react-bootstrap';
import LinkButton from '../layout/LinkButton';

// Styles 
import styles from './modules/Home.module.css';

// Images
import savings from '../../img/savings.svg';

function Home(){
    return (
        <section className="home py-5">
            <Container>
                <Row>
                    <Col className={`d-flex justify-content-center`}>
                        <h1>Welcome to <span className={`${styles.text__bold}`}>Costs!</span></h1>
                    </Col>
                </Row>
                <Row className="my-5">
                    <Col md={6} className={`d-flex justify-content-center align-items-center`}>
                        <div>
                            <p className={`${styles.text__description}`}>
                                Costs is a project management platform. Organize all your project costs in one place.
                            </p>
                            <p className={`${styles.text__description}`}>
                                Start managing your projects right now!
                            </p>
                            <div className="d-flex justify-content-center">
                                <LinkButton to="/new-project" text="Create a project" />
                            </div>
                        </div>
                        
                    </Col>
                    <Col md={6} className="d-flex justify-content-center">
                        <img src={savings} alt=""  className="w-75 mw-100" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
export default Home;