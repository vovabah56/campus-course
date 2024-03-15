import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';

function Header({ isAuth }) {
    return (
        <Navbar expand="md" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">
                    Кампусные курсы
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        {isAuth ? (
                            <>
                                <Nav.Link  to="/requests" className={location.pathname === '/requests' ? 'active' : ''}>Группы курсов</Nav.Link>
                                <Nav.Link  to="/keys" className={location.pathname === '/keys' ? 'active' : ''}>Мои курсы</Nav.Link>
                                <Nav.Link  to="/timetable" className={location.pathname === '/timetable' ? 'active' : ''}>Преподаваемые курсы</Nav.Link>
                            </>
                        ) : null }
                    </Nav>

                    <Nav className="ms-auto">
                        <Nav.Link  href={isAuth ? '/profile' : '/login'}>
                            {isAuth ? 'Иванов Иван Иванович' : 'Войти'}
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;