import { Component } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

class FormularioReserva extends Component {
    constructor(props) {
        super(props);
        this.state = {
            partida: '',
            retorno: '',
            nome_cliente: '',
            cpf_cliente: '',
            quantidade: 1,
            redirect: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        let reserva = {
            id_destino: this.props.id_destino,
            partida: this.state.partida,
            retorno: this.state.retorno,
            //quantidade: this.state.quantidade,
            passageiro: {
                nome: this.state.nome_cliente,
                cpf: this.state.cpf_cliente
            }
        }
        axios.post('http://localhost:4000/reserva', reserva)
            .then(res => {
                this.setState({ redirect: true })
            }).catch(error => {
                alert('Erro ao criar reserva');
            })
        event.preventDefault();
    }

    render() {
        if (this.state.redirect) {
            return <Navigate to="/reservas" />
        }
        return <div className="container">
            <div className="title">Reserva</div>
            <div className="content">
                <form onSubmit={this.handleSubmit}>
                    <div className="user-details">
                        <div className="input-box">
                            <span className="details">Destino</span>
                            <input type="text" placeholder="Informe o nome do seu destino" disabled value={this.props.nome} />
                        </div>
                        <div className="input-box">
                            <span className="details">Passagens</span>
                            <input type="number" placeholder="Informe a quantidade de passagens" disabled onChange={this.handleChange} value={this.state.quantidade} name="quantidade" />
                        </div>
                        <div className="input-box">
                            <span className="details">Data de partida</span>
                            <input type="date" placeholder="Informe a data de embargue" required onChange={this.handleChange} value={this.state.partida} name="partida" />
                        </div>
                        <div className="input-box">
                            <span className="details">Data de retorno</span>
                            <input type="date" placeholder="Informe a data de retorno" required onChange={this.handleChange} value={this.state.retorno} name="retorno" />
                        </div>
                        <div className="input-box">
                            <span className="details">Nome</span>
                            <input type="text" placeholder="Informe o seu nome" required onChange={this.handleChange} value={this.state.nome_cliente} name="nome_cliente" />
                        </div>
                        <div className="input-box">
                            <span className="details">CPF</span>
                            <input className="text" placeholder="Informe o seu CPF" required onChange={this.handleChange} value={this.state.cpf_cliente} name="cpf_cliente" />
                        </div>
                    </div>
                    <div className="button">
                        <input type="submit" value={"Comprar"} />
                    </div>
                </form>
            </div>
        </div>
    }
}

export default FormularioReserva