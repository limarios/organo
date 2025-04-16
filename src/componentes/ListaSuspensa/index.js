import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    console.log(props.itens)
    return (
        <div>
            <label>{props.label}</label>
            <select className='lista-suspensa'>
                {props.itens.map((item) => (
                    <option key={item}>{item}</option>
                ))}
            </select>
        </div>
    )
}

export default ListaSuspensa