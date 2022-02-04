import { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BotaoRemover from "../components/BotaoRemover";
import BotaoEditar from "../components/BotaoEditar";

class Reservas extends Component {
    state = {
        reservas: []
    }

    componentDidMount() {
        axios.get('http://localhost:4000/reservas')
            .then(res => {
                this.setState(res.data)
                console.log(res.data)
            })

    }
    render() {
        return <section className="offers" id="offers">
            <div className="table box-container">
                <table className="content-table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>CPF</th>
                            <th>Destino</th>
                            <th>Data de partida</th>
                            <th>Data de retorno</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.reservas.map(
                                reserva =>
                                    <tr>
                                        <td><Link to={'/reserva/' + reserva.id}>{reserva.id}</Link></td>
                                        <td><Link to={'/reserva/' + reserva.id}>{reserva.passageiro.nome}</Link>
                                        </td>
                                        <td>{reserva.passageiro.cpf}</td>
                                        <td>{reserva.destino.nome}</td>
                                        <td>{reserva.partida}</td>
                                        <td>{reserva.retorno}</td>
                                        <td><BotaoRemover key={'delete' + reserva.id} id_reserva={reserva.id} /> - <BotaoEditar key={'edit' + reserva.id} id_reserva={reserva.id} /> </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </section>
    }
}

export default Reservas
