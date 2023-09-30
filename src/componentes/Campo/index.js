import "./Campo.css";

const Campo = (props) => {
    const placeholderModificado = `${props.placeholder}...`;
    const recibirDatos = (evento) =>{   
        props.valorActualizar(evento.target.value)
    }

    const {type = "text"} = props;

    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input 
            placeholder={placeholderModificado} 
            required = {props.required} 
            value={props.valor} 
            onChange={recibirDatos}
            type={type}
        />
    </div>
}

export default Campo;