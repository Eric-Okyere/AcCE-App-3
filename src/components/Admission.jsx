import React from 'react'
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Admi from "../components/Admi.pdf"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


function Admission() {
  return (
    <div>
    <Container>
    <Row>
    
    <Col md={12}>
    
      <Card className='cardvid'>
      
      <Card.Body>
        <Card.Text>
        <h4>Everything You Need To Know About Admission</h4>
       <embed title='Important' src={Admi} className="pdf"></embed>
       
       </Card.Text>
      </Card.Body>
    </Card>
    </Col>
   
    </Row>
    </Container>
    </div>
  )
}

export default Admission