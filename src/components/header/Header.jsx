import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import {useGetGroups} from "../../api/getGroups.js";

function Header({ isAuth }) {
    function logout(){
        localStorage.removeItem("token")
    }

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
                                <NavLink
                                    to="/groups"
                                >
                                    Группы курсов
                                </NavLink>
                                <Nav.Link  to="/keys" className={location.pathname === '/keys' ? 'active' : '' } onClick={useGetGroups}>Мои курсы</Nav.Link>
                                <Nav.Link  to="/timetable" className={location.pathname === '/timetable' ? 'active' : ''}>Преподаваемые курсы</Nav.Link>
                            </>
                        ) : null }
                    </Nav>

                    <Nav className="ms-auto">
                        <Nav.Link  href={isAuth ? '/profile' : '/login'}>
                            {isAuth ? 'Иванов Иван Иванович' : 'Войти'}
                        </Nav.Link>
                        {isAuth ? (
                            <Nav.Link href={'/login'} onClick={logout}> Выход</Nav.Link>
                        ):null}

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;