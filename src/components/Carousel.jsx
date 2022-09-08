import Carousel from 'react-bootstrap/Carousel';
import badge from "./ac.jpeg"
import a from "./1.jpg"
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Arts from "../Arts.jpg"
import Building from "../Building.jpg"
import Inside from "../Inside.jpeg"
import Principal from "../Principal.jpg"
import yep1 from "../components/yep1.jpg"
import yep from "../components/yep.jpg"
import New from "../components/New.jpg"
import New1 from "../components/New1.jpg"



function Fade() {
  return (
    <Carousel fade>
     


      <Carousel.Item className='caro'>
      <Col md={6}>
      <Card  className='cardvid'>
      <img
      className="yep d-block w-100"
      src={New}
      
      alt="First slide" />
    <Card.Body>
      <Card.Text>
       
      </Card.Text>
    </Card.Body>
  </Card>
  </Col>
        <Col md={6}>
          <Card  className='cardvid'>
          <img
          className="yep d-block w-100"
          src={yep}
          
          alt="First slide" />
        <Card.Body>
          <Card.Text>
           
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
        <Carousel.Caption>
        <div ><h1 className='welcome'>Welcome to Accra College Of Education</h1></div>
          <h3>Gye Nyame Shall Forever Live</h3>
        </Carousel.Caption>
      </Carousel.Item>
     
      <Carousel.Item className='caro'>
      
        
        <Col >
          <Card  className='cardvid'>
          <img
          className="yep d-block w-100"
          src={New1}
          
          alt="First slide" />
        <Card.Body>
          <Card.Text>
            
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
        
        <Carousel.Caption>
        <div ><h1 className='welcome'>Welcome to Accra College Of Education</h1></div>
          <h3>Gye Nyame Shall Forever Live</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='caro'>
      
        <Col>
          <Card  className='cardvid'>
          <img
          className="top yep d-block w-100"
          src={yep1}
          
          alt="First slide" />
        <Card.Body>
          <Card.Text>
            
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
        
        
        <Carousel.Caption>
        <div ><h1 className='welcome'>Welcome to Accra College Of Education</h1></div>
          <h3>Gye Nyame Shall Forever Live</h3>
        </Carousel.Caption>
      </Carousel.Item>




      <Carousel.Item className="caro">
       
        

        <Col md={6}>
        <Card  className='cardvid'>
        <img
        className="yep d-block w-100"
        src={Principal}
        
        alt="First slide" />
      <Card.Body>
        <Card.Text>
          
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
        <Col md={6}>
        <Card  className='cardvid'>
        <img
        className="yep d-block w-100"
        src={Principal}
        
        alt="First slide" />
      <Card.Body>
        <Card.Text>
          
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>


        <Carousel.Caption>
        <div ><h1 className='welcome'>Welcome to Accra College Of Education</h1></div>
          <h3>Gye Nyame Shall Forever Live</h3>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="pic1 d-block w-100"
          src={Arts}
          alt="First slide"
          
        />
        
        <Carousel.Caption>
        <div ><h1 className='welcome'>Welcome to Accra College Of Education</h1></div>
          <h3>Gye Nyame Shall Forever Live</h3>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>

      <Col >
      <Card  className='cardvid'>
      <img
          className="pic1 d-block w-100"
          src={Building}
          alt="First slide"
          
        />
    <Card.Body>
      <Card.Text>
        
      </Card.Text>
    </Card.Body>
  </Card>
  </Col>
        <Carousel.Caption>
        <div ><h1 className='welcome'>Welcome to Accra College Of Education</h1></div>
          <h3>Gye Nyame Shall Forever Live</h3>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="pic1 d-block w-100"
          src={Inside}
          alt="First slide"
          
        />
        
        <Carousel.Caption>
        <div ><h1 className='welcome'>Welcome to Accra College Of Education</h1></div>
          <h3>Gye Nyame Shall Forever Live</h3>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="pic1 d-block w-100"
          src={a}
          alt="First slide"
        />
        <Carousel.Caption>
        <div ><h1 className='welcome'>Welcome to Accra College Of Education</h1></div>
        <h3>Gye Nyame Shall Forever Live</h3> </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item className="caro">
      <Col md={6}>
      <Card  className='cardvid'>
      <img
          className="pic1  d-block w-100"
          src={badge}
          alt="Third slide"
        />
    <Card.Body>
      <Card.Text>
        
      </Card.Text>
    </Card.Body>
  </Card>
  </Col>
      <Col md={6}>
      <Card  className='cardvid'>
      <img
          className="pic1  d-block w-100"
          src={badge}
          alt="Third slide"
        />
    <Card.Body>
      <Card.Text>
        
      </Card.Text>
    </Card.Body>
  </Card>
  </Col>


        

        <Carousel.Caption>
        <div ><h1 className='welcome'>Welcome to Accra College Of Education</h1></div>
        <h3>Gye Nyame Shall Forever Live</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Fade;