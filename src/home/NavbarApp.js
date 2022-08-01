import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarApp() {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="#home" className="navlinks">IT Courses</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto mx-3">
          <Nav.Link href="#deets" style={{marginRight: 20}} className="navlinks">Home</Nav.Link>
            <Nav.Link href="#course" style={{marginRight: 20}} className="navlinks">Course</Nav.Link>
          </Nav>
          <Nav>
          <div className="navButton py-1 px-2">
            <div className='navLine'></div>
            <Nav.Link href="/SignIn" className="text-white">Kirish</Nav.Link>
            <Nav.Link href="/SignUp" className="text-white">Ro`yxatdan o`tish</Nav.Link>
          </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarApp;
