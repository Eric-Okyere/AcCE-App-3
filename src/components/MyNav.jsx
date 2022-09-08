
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import ac from "./ac.jpeg"
import { Link } from 'react-router-dom';





function NavBB() {
  return (
    <>
    <div>
    <Navbar  className='navb' collapseOnSelect expand="lg" bg="dark" variant="dark">
      
      <img className='phot App-logo' src={ac}  alt="logo"/>
       
        <Navbar.Brand href="#home">
        <Nav className="me-auto">
        <NavDropdown title="AcCE" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"><Link to="/history"><h4 >History</h4></Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">
              <Link to="/mission"><h4>Mission & Vision</h4></Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://goo.gl/maps/NokvyaK4uKFK6gsV8">
              <h4>Location</h4>
              </NavDropdown.Item>
              
              
            </NavDropdown>
        </Nav>
        </Navbar.Brand>

        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          
          <Nav>
          <NavDropdown title="ADMISSION " className='navlink' id="collasible-nav-dropdown" >
         
          <NavDropdown.Item >
          <Link to="/admission"><h4>Admission Requirements</h4></Link>
         </NavDropdown.Item>
          <NavDropdown.Item href="">
          <h4 title='*924*8#'> Buy Admission Form</h4>
         </NavDropdown.Item>
         
         <NavDropdown className='Fees' title="PAY FEES " id="collasible-nav-dropdown" >
         
          <NavDropdown.Item href="">
          <h4 title='0304767476'>Bank Account</h4>
         </NavDropdown.Item>
          <NavDropdown.Item href="">
          <h4 title='0247747624'>MoMo</h4>
         </NavDropdown.Item>
        </NavDropdown>
        </NavDropdown>
            
          </Nav>
          <Nav>
          <NavDropdown title="ANNOUNCEMENT " id="collasible-nav-dropdown" >
         
          <NavDropdown.Item >
          <Link to="/announcement"><h4>Admission Requirements</h4></Link>
         </NavDropdown.Item>
          
        </NavDropdown>
            
          </Nav>
          <Nav>
          <NavDropdown title="PRIMARY EDUCATION " id="collasible-nav-dropdown" >
         
          <NavDropdown.Item >
          <Link to="/Announcement"><h4>Course Combinations</h4></Link>
         </NavDropdown.Item>
         <NavDropdown.Divider />
          <NavDropdown.Item to="/lecturenotes">
          <Link to="/lecturenotes"><h4>Lecture Notes</h4></Link>
          </NavDropdown.Item>
            <NavDropdown.Divider />
          <NavDropdown.Item >
          <Link to="/result"><h4>Students Results</h4></Link>
          </NavDropdown.Item>
          
          
        </NavDropdown>
            
          </Nav>
          <Nav>
          <NavDropdown title="EARLY CHILDHOOD " id="collasible-nav-dropdown" >
         
          <NavDropdown.Item >
          <Link to="/Announcement"><h4>Course Combinations</h4></Link>
         </NavDropdown.Item>
         <NavDropdown.Divider />
          <NavDropdown.Item >
          <Link to="/lecturenotes"><h4>Lecture Notes</h4></Link>
          </NavDropdown.Item>
            <NavDropdown.Divider />
          <NavDropdown.Item >
          <Link to="/result"><h4>Students Results</h4></Link>
          </NavDropdown.Item>
          
          
        </NavDropdown>
            
          </Nav>
          <Nav>
          <NavDropdown title="JHS EDUCATION" id="collasible-nav-dropdown" >
          <NavDropdown.Item > 
          <Link to="/Announcement"><h4>Course Combinations</h4></Link>
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item >
          <Link to="/lecturenotes"><h4>Lecture Notes</h4></Link>
          </NavDropdown.Item>
            <NavDropdown.Divider />
          <NavDropdown.Item >
          <Link to="/result"><h4>Students Results</h4></Link>
          </NavDropdown.Item>
         
          
        </NavDropdown>
            
          </Nav>
          <Nav>
          <NavDropdown title="CONTACTS " id="collasible-nav-dropdown" >
         
          
          <NavDropdown  title="ADMINISTRATION " id="collasible-nav-dropdown" >
         
          <NavDropdown.Item href="">
          <h4 title='0304767476'>Secretary</h4>
         </NavDropdown.Item>
          
        </NavDropdown>
         
         <NavDropdown className='Fees' title="DEPARTMENTS" id="collasible-nav-dropdown" >
         
          <NavDropdown.Item href="">
          <h4 title='0304767476'>Mathematics</h4>
         </NavDropdown.Item>
          <NavDropdown.Item href="">
          <h4 title='0247747624'>Education</h4>
         </NavDropdown.Item>
          <NavDropdown.Item href="">
          <h4 title='0247747624'>ICT</h4>
         </NavDropdown.Item>
         <NavDropdown.Item href="">
          <h4 title='0247747624'>Security</h4>
         </NavDropdown.Item>
        </NavDropdown>
        </NavDropdown>
            
          </Nav>

        </Navbar.Collapse>
     
    </Navbar>

   
   </div>
   
   </>
  );
}

export default NavBB;