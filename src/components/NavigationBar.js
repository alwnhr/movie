import {Navbar, Container, Nav} from 'react-bootstrap'

const NavigationBar = () => {
  return (
    <div>
    <Navbar variant='dark'>
      <Container>
        <Navbar.Brand href='/'>MOVIES</Navbar.Brand>
        <Nav>
        <Nav.Link href='#animeh'>ANIMEH</Nav.Link>
        <Nav.Link href='#comedy'>COMEDY</Nav.Link>
        <Nav.Link href='#fantasy'>FANTASY</Nav.Link>
        <Nav.Link href='#superhero'>SUPERHERO</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavigationBar