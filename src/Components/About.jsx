import React from 'react';
import './About.css';
import Foto from '../assets/Foto.jpg'

const About  = ({titulo, nombre, email, descripción }) =>{
    return(
        <>
        <div class='card'>
            <img id='picture' src={Foto} 
            />
        
            <h1>{titulo}</h1>
            <h2>{nombre}</h2>
            <h2>{email}</h2>
            <p>{descripción}</p>
        </div>
        
        </>
    )
}


export default About;