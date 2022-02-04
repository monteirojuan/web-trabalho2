import axios from "axios";
import { Component } from "react";

class BotaoRemover extends Component {
    deletarReserva() {
        axios.delete('http://localhost:4000/reserva/' + this.props.id_reserva)
            .then(res => {
                window.location.reload();
            }).catch(error => {
                console.log(error);
                alert('Erro ao apagar reserva');
            })
    }
    render() {
        return <button onClick={this.deletarReserva.bind(this)}><i className="fas fa-trash"></i></button>
    }
}

export default BotaoRemover;