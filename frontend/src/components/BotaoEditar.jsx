import { Component } from "react";
import { Link } from "react-router-dom";

class BotaoEditar extends Component {
    render() {
        return <Link to={"/reserva/" + this.props.id_reserva} className="small-btn">
            <i className="fas fa-edit"></i>
        </Link>
    }
}

export default BotaoEditar;