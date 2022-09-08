
import Ict from "../Ict.png"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';



function BgVideo() {
  return (
    <div >
    <Container>
    <h1  className='header'>The ICT Department</h1>
    <Row>
      <Col md={4}>
      <Card className='cardvid'>
      <img src={Ict} alt='logo' />
      <Card.Body>
        <Card.Text>
        
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
     
    </Col>
      <Col md={4}>
      <Card className='cardvid'>
      <img src={Ict} alt='logo' />
    <Card.Body>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
      
      </Col>
      <Col md={4}>
      <Card className='cardvid'>
      <img src={Ict} alt='logo' />
    <Card.Body>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
      </Col>
    </Row>
  </Container>
   
    </div>
  )
}

export default BgVideo