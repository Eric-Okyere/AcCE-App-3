import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Ac from "../components/ac.jpeg"




function Mission() {
  return (
    <div >
   

    
    <Container className=''>
    <h1  className='header'>Mission And Vision</h1>
    <Row>
      <Col md={6}>
      <Card className='cardvid Historybackg'>
      
      <Card.Body>
        <Card.Text>
        
        <h1>Vision</h1> 
        <h4>Accra College of Education is committed to be the ultimate center of excellence for quality teacher education in Ghana.</h4>
        
        <h1>Mission Statement</h1>
        <h4>To train and orient student-teachers to become competent professional teachers of high caliber for Basic schools in Ghana through quality teaching and learning, research and application of modern technologies.</h4>
           
        </Card.Text>
        <img className='missionimg App-logo' src={Ac} alt='pic'/>
      </Card.Body>
    </Card>
     
    </Col>
      <Col md={6}>
      <Card className='cardvid Historybackg'>
     
      <Card.Body>
        <Card.Text>
        
        <h1>Vision</h1> 
        <h4>Accra College of Education is committed to be the ultimate center of excellence for quality teacher education in Ghana.</h4>
        
        <h1>Mission Statement</h1>
        <h4>To train and orient student-teachers to become competent professional teachers of high caliber for Basic schools in Ghana through quality teaching and learning, research and application of modern technologies.</h4>
        <img className='missionimg App-logo2' src={Ac} alt='pic'/>
        </Card.Text>
      </Card.Body>
    </Card>
     
    </Col>
    </Row>
    </Container>


    </div>
  )
}

export default Mission