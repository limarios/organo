import './CampoTexto.css';

const CampoTexto = (props) => {
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input type="text" placeholder={`Digite o seu ${props.label.toLowerCase()}...`} />
        </div>
    );
}

export default CampoTexto