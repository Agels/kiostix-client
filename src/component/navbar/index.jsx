import {Navbar,Nav,Container} from 'react-bootstrap';
import {useNavigate}  from 'react-router-dom';
function Navbars() {
    const navigate = useNavigate();
  return (
    <Navbar bg="light" variant="light">
    <Container>
      <Navbar.Brand onClick={()=> navigate('/')}>Kios</Navbar.Brand>
      <Nav className="ms-auto">
      <Nav.Link onClick={()=> navigate('/buku')}>buku</Nav.Link>
        <Nav.Link onClick={()=> navigate('/penulis')}>Penulis</Nav.Link>
        <Nav.Link  onClick={()=> navigate('/kategori')}>Kategori</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default Navbars;