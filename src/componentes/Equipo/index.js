import "./Equipo.css";
import Colaborador from "../Colaborador"
import hexToRgba from "hex-to-rgba"

const Equipo = (props) => {

    const {colorPrimario, colorSecundario, titulo, id} = props.datos
    const {colaboradores, eliminar, color, like} = props

    const estiloSection = {
        backgroundColor: hexToRgba(colorPrimario, 0.6)
    }

    const estiloH3 = {
        borderColor: colorPrimario
    }

    return <>
    { 
        colaboradores.length > 0 && <section className="equipo" style={estiloSection}>
        <input type="color" className="color" value={colorSecundario}
            onChange={(evento) => {
                evento.preventDefault();
                color(evento.target.value, id);
            }}/>
        <h3 style={estiloH3}>{titulo}</h3>
        <div className="colaboradores">
            {   colaboradores.map((colaborador, index) => {
                    return <Colaborador colorPrimario = {colorPrimario} key={index} datos={colaborador}
                    eliminar = {eliminar}
                    like={like}/>
                })
            }    
        </div>
        </section>
    }
    </>
} 

export default Equipo;