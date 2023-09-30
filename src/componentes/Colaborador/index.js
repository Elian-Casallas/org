import "./Colaborador.css"
import {AiFillCloseCircle, AiFillHeart, AiOutlineHeart} from "react-icons/ai"

const Colaborador = (props) =>{
    const {colorPrimario, eliminar, like} = props;
    const {nombre, puesto, foto, id, fav} = props.datos;
    
    const estiloEncabezado = {
        backgroundColor: colorPrimario
    }


    return <div className= "colaborador">
        <AiFillCloseCircle onClick={() => eliminar(id)} className="eliminar"/>
        <div className= "encabezado" style={estiloEncabezado}>
            <img src={foto} alt="Harland"/>
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav ? <AiFillHeart className="heart" color="red" onClick={() => like(id)}/> : <AiOutlineHeart className="heart" onClick={() => like(id)}/>}            
        </div>
    </div>
}

export default Colaborador;