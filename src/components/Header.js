import './styles/Header.css';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

function Header() {
    return (
        <div className='header'>
            <Navbar variant="dark">
                <Navbar.Brand className='link1' as={Link} to='/'>Dee Gee's</Navbar.Brand>
                <Container className='nav'>
                    <Nav className="justify-content-end">
                        <Link className='link2' id='nav-link' as={Link} to='/tour'>Tour</Link>
                        <Link className='link3' id='nav-link' as={Link} to='/merch'>Merch</Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;