import React from 'react';
import Tarjeta from './Tarjeta.jsx';
import './About.css';
import Foto from '../assets/Foto.jpg'


const About = () => {
    return(
        <div>
            <img id='picture' src={Foto} 
            />
             <Tarjeta 
             Titulo= "Información personal" 
             Nombre= "Elizabeth"
             Email= "elipila21@gmail.com"
             Descripción ="Me gustan los temas con relación a la tecnología y ciencia, disfruto estar desarrollando habilidades de lógica para poder codificar utilizando buenas prácticas. Mis colores favoritos son el morado y el negro." 
             />
        </div>

    )
}


export default About;