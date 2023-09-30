import {useState} from "react"
import "./MiOrg.css";

const MiOrg = (props) => {
    // Estado - hooks
    // const [nombreVariable, funcionActualiza] = useState(valorIncial); valorIncial -> cualquier tipo de dato
    return <section className = "orgSection">
        <h3 className= "titulo">Mi Organizacion</h3>
        <img onClick={props.cambiarMostrar} className="imagen" src= ".\img\add.png" alt="Imagen add"/>
    </section>
}

export default MiOrg;