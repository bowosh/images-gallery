import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { ReactComponent as Logo } from '../images/logo.svg';
const Header = ({ title }) => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container fluid>
        <div>
          <Navbar.Brand>{title}</Navbar.Brand>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
