import React from 'react'
import Bg from "./vid.mp4"
import Dance from "./Dance.mp4"
import Dance2 from "./Dance2.mp4"
import Dance1 from "./Dance1.mp4"
import Dance4 from "./Dance4.mp4"
import Dance3 from "./Dance3.mp4"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';









function BgVideo() {
  return (
    <div >
    <Container>
    <h1  className='header'>The Music Department</h1>
    <Row>
      <Col md={4}>
      <Card className='cardvid'>
      <video className='videocont vid1' controls  src={Dance} type="video/mp4"></video>
      <Card.Body>
        <Card.Text>
         <h1>The Music Department</h1>
         <p>It is not alwalys about books but we train their skills aswell. t we train their skills</p>
         
        
        </Card.Text>
      </Card.Body>
    </Card>
      <Card className='cardvid'>
      <video className='videocont vid1' controls  src={Dance2} type="video/mp4"></video>
      <Card.Body>
        <Card.Text>
         <h1>The Music Department</h1>
         <p>It is not alwalys about books but we train their skills aswell. It is not alwalys about books but we train</p>
         
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
      <Col md={4}>
      <Card className='cardvid'>
    <video className='videocont' controls  src={Bg} type="video/mp4"></video>
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
    <video className='videocont'  controls src={Dance4} type="video/mp4"></video>
    <Card.Body>
      <Card.Text>
       <p> Some quick example text to build on the card title and make up the
       bulk of the card's content.
       Some quick example text to build on the card title and make up the
       bulk of the card's content.
       Some quick example text to build on the card title and 
       </p>
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