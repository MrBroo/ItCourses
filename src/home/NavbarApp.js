import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarApp() {
  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" variant="light">
      <Container>
        <Navbar.Brand href="#home">IT Courses</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link href="#deets" style={{marginRight: 20}}>Home</Nav.Link>
            <Nav.Link href="#memes" style={{marginRight: 20}}>About</Nav.Link>
            <Nav.Link href="#course" style={{marginRight: 20}}>Course</Nav.Link>
            <Nav.Link href="/SignUp">SignUp</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarApp;
