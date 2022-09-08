import React from 'react'
import { useNavigate } from "react-router-dom"

function ErrorPage() {
    let reload = useNavigate();
  return (
    <div className='error'>
   

    <h2>This site can’t be reached</h2>
    <h4>Page not found! Erro 404</h4>
    <p>localhost refused to connect.
    Try:
    
    Checking <br /> the connection
    Checking the proxy and the firewall
   <br /> ERR_CONNECTION_REFUSED</p>

<button onClick={()=>{reload("/")}}>Reload</button>
    </div>
  )
}

export default ErrorPage