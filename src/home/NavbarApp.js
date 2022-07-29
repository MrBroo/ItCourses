import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarApp() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="navlinks">IT Courses</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link href="#deets" style={{marginRight: 20}} className="navlinks">Home</Nav.Link>
            <Nav.Link href="#memes" style={{marginRight: 20}} className="navlinks">About</Nav.Link>
            <Nav.Link href="#course" style={{marginRight: 20}} className="navlinks">Course</Nav.Link>
            <Nav.Link href="/SignUp" className="navlinks">SignUp</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarApp;
