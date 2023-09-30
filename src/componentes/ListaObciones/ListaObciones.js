import "./ListaObciones.css";

const ListaObciones = (props) => {

    const recibirDatos = (evento) =>{   
        props.valorActualizar(evento.target.value)
    }

    return  <div className = "lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={recibirDatos}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            {props.equipos.map((equipo, index) => {
                return <option key = {index} value={equipo}> {equipo} </option>
            } ) }
        </select>
    </div>
}

export default ListaObciones;