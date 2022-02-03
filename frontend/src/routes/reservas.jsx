import { Component } from "react";

class Reserva extends Component {
    render() {
        return <section className="offers" id="offers">
            <div className="table">
                <table className="content-table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>CPF</th>
                            <th>Destino</th>
                            <th>Data de partida</th>
                            <th>Data de retorno</th> 
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.props.id}</td>
                            <td>{this.props.nome}</td>
                            <td>{this.props.cpf}</td>
                            <td>{this.props.destino}</td>
                            <td>{this.props.partida}</td>
                            <td>{this.props.retorno}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    }
}

export default Reserva
