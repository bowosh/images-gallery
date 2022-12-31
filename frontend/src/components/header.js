
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const navbarStyle = {
  backgroundColor: 'yellow'
}

const Header = ({title}) => {
  return (
    <Navbar bg="primary" variant="dark"expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">{title}</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;