import "./Formulario.css";
import {useState} from "react"
import Campo from "../Campo";
import ListaObciones from "../ListaObciones/ListaObciones";
import Boton from "../Boton";

const Formulario = (props) =>{

    const [nombre, actualizarNombre] = useState("");
    const [puesto, actualizarPuesto] = useState("");
    const [foto, actualizarFoto] = useState("");
    const [equipo, actualizarEquipo] = useState("");

    const [titulo, actualizarTitulo] = useState("");
    const [color, actualizarColor] = useState("");

    const {registrar, equipos, crearEquipo, uuidv4} = props;

    const manejarEnvio = (evento) => {
        evento.preventDefault();
        let datosEnviar = {
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo,
            id: uuidv4()
        }
        registrar(datosEnviar);
        actualizarNombre("");
        actualizarPuesto("");
        actualizarFoto("");
        actualizarEquipo("");
    }

    const manejarNuevoEquipo = (evento) => {
        evento.preventDefault();
        crearEquipo({titulo, colorPrimario:color})
        actualizarTitulo("");
        actualizarColor("");
    }

    return <section className = "formulario">
        <form onSubmit = {manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo titulo = "Nombre" placeholder = "Ingresar nombre" required 
            valor={nombre} valorActualizar={actualizarNombre}/>
            <Campo titulo = "Puesto" placeholder = "Ingresar puesto" required
            valor={puesto} valorActualizar={actualizarPuesto}/>
            <Campo titulo = "Foto" placeholder = "Ingresar enlace de foto" required
            valor={foto} valorActualizar={actualizarFoto}/>
            <ListaObciones valor={equipo} valorActualizar={actualizarEquipo} equipos = {equipos}/>
            <Boton texto = "Crear"/>
        </form> 

        <form onSubmit = {manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo titulo = "Titulo" placeholder = "Ingresar titulo" required 
            valor={titulo} valorActualizar={actualizarTitulo}/>
            <Campo titulo = "Color" placeholder = "Ingresar el color en Hex..." required
            valor={color} valorActualizar={actualizarColor} type="color"/>
            <Boton texto = "Registrar Equipo"/>
        </form>
    </section>
}

export default Formulario;