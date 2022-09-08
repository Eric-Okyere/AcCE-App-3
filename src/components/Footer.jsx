import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import phot from "../3.JPG"
import wat from "../whatsap.png"
import insta from "../instagram.webp"
import twit from "../Twitter.webp"

import facebook from "../Facebook.webp"
import email from "../email.png"


function Footer() {
  return (
   
    <Container id='footer' className='footer'>
      <Row>
      <Col md={5} className="contdiv">
      <img className='photo App-logo2' src={phot}  alt="logo"/>
    <h6>Hello, thank you very much for going through my project. Please do well to comment about my project through the following links</h6> <br />
    <h6>I dedicate this project to Prof. George and Nana Adwoa</h6> 
    </Col>
        <Col md={5}>
       
       <div className='smalldiv'><img  title='Whatsap me' className='wat' src={wat} alt='logo'/><h5 className='sosname lab'>0247747624</h5></div>
        <div className='smalldiv'>     <img title="Instagram" className='insta' src={insta} alt='logo'/><h5 className='sosname lab1'>Instagram</h5></div>
        <div className='smalldiv'><img title="Twitter" className='twit' src={twit} alt='logo'/><h5 className='sosname lab1' >Twitter</h5 ></div>
        <div className='smalldiv'><img title="FaceBook" className='face' src={facebook} alt='logo'/><h5 className='sosname lab2'>Facebook</h5></div>
        <div className='smalldiv'>    <img title="Email" className='email' src={email} alt='logo'/><h5 className='sosname lab3'>Email</h5></div>
       
       </Col>
       
      </Row>
    </Container>
   
  )
}

export default Footer