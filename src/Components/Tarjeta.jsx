import './Tarjeta.css'

const Tarjeta  = ({Titulo, Nombre, Email, Descripción }) =>{
    return(
        <div class='card'>
            <h1>{Titulo}</h1>
            <h2>{Nombre}</h2>
            <h2>{Email}</h2>
            <p>{Descripción}</p>
        </div>
    )
}

export default Tarjeta