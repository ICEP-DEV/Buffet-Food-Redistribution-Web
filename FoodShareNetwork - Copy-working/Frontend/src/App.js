import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import RecepientSignUp from './pages/RecepientSignUp';


function App() {
  return (
    <div>
      <Navbar expand="lg" className='fixed-top bg-body-tertiary shadow'>
        <Container>
          <Navbar.Brand>
            <Link to="/" className='navbar-brand text-success fw-semibold'>
              Welcome To FoodShare Network
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto justify-content-end w-100 fw-bold' >
              <Nav.Link href='/' className='active text-uppercase'>Home</Nav.Link>
              <Nav.Link href='/about' className='active text-uppercase'>About</Nav.Link>
              <Nav.Link href='/contact' className='active text-uppercase'>Contact</Nav.Link>
              <DropdownButton title="SIGN UP" variant="outline-success" className="btn-lg">
                <Dropdown.Item as={Link} to="/signup">As Donor</Dropdown.Item>
                <Dropdown.Item as={Link} to="/recepientsignup">As Recipient</Dropdown.Item>
              </DropdownButton>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path ='/signup' element={<SignUp/>}/>
        <Route path ='/login' element= {<Login/>}/>
        <Route path ='/recepientsignup' element={<RecepientSignUp/>}/>
      </Routes>

      <footer className='bg-body-tertiary'>
        <p className='p-3 m-0 text-center'>copyright @ made by Food Share Network</p>
      </footer>
    </div>
  );
}

export default App;
