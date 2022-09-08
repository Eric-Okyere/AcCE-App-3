import React from 'react'
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import New1 from "../components/Calender.pdf"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


function Announcement() {
  return (
    <div>
    <Container>
    <Row>
    <Col md={12}>
    
      <Card className='cardvid'>
      
      <Card.Body>
        <Card.Text>
        <h4>Find The Academic Calender below</h4>
       <iframe title='Important' src={New1} className="pdf"></iframe>
       
       </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    <Col md={12}>
    
      <Card className='cardvid'>
      
      <Card.Body>
        <Card.Text>
        <h4>Find The Academic Calender below</h4>
       <embed title='Important' src={New1} className="pdf"></embed>
       
       </Card.Text>
      </Card.Body>
    </Card>
    </Col>
   
    </Row>
    </Container>
    </div>
  )
}

export default Announcement