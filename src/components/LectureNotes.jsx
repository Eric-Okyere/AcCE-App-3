import React from 'react'
import Note from "../components/Note1.pdf"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'


function LectureNotes() {
  return (
    <div className='notes'>
   
    
    

    <Container>
   <Row>
    <Col md={12}>
    
      <Card className='cardvid'>
      
      <Card.Body>
        <Card.Text>
        <h4>Mathematics </h4>
        <embed src={Note} type="application/pdf" />
       
       </Card.Text>
      </Card.Body>
    </Card>
    </Col>
   
    <Col md={12}>
    
      <Card className='cardvid'>
      
      <Card.Body>
        <Card.Text>
        <h4>Mathematics </h4>
        <embed src={Note} type="application/pdf" />
       
       </Card.Text>
      </Card.Body>
    </Card>
    </Col>
   
    </Row>
    </Container>
    </div>

  )
}

export default LectureNotes