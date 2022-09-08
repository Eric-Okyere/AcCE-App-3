
import Sport from "./Sport.mp4"
import Sport1 from "./Sport1.mp4"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';



function BgVideo() {
  return (
    <div >
    <Container>
    <h1  className='header'>The Physical Education Department</h1>
    <Row>
      <Col md={4}>
      <Card className='cardvid'>
      <video className='videocont vid1' controls  src={Sport} type="video/mp4"></video>
      <Card.Body>
        <Card.Text>
        
        
        </Card.Text>
      </Card.Body>
    </Card>
     
    </Col>
      <Col md={4}>
      <Card className='cardvid'>
      <video className='videocont vid1' controls  src={Sport1} type="video/mp4"></video>
    <Card.Body>
      <Card.Text>
       
      </Card.Text>
    </Card.Body>
  </Card>
      <Card className='cardvid'>
      <video className='videocont vid1' controls  src={Sport1} type="video/mp4"></video>
    <Card.Body>
      <Card.Text>
       
      </Card.Text>
    </Card.Body>
  </Card>
      <Card className='cardvid'>
      <video className='videocont vid1' controls  src={Sport1} type="video/mp4"></video>
    <Card.Body>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the 
      </Card.Text>
    </Card.Body>
  </Card>
      </Col>
      <Col md={4}>
      <Card className='cardvid'>
      <video className='videocont vid1' controls  src={Sport} type="video/mp4"></video>
    <Card.Body>
      <Card.Text>
       
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