import { Component } from "react";

class RealizarReserva extends Component {
    render() {
        return <div className="container">
            <div className="title">Reserva</div>

            <div className="content">
                <form action="#">
                    <div className="user-details">
                        <div className="input-box">
                            <span className="details">Destino</span>
                            <input type="text" placeholder="Informe o nome do seu destino" required />
                        </div>
                        <div className="input-box">
                            <span className="details">Passagens</span>
                            <input type="text" placeholder="Informe a quantidade de passagens" required/>
                        </div>
                        <div className="input-box">
                            <span className="details">Data de partida</span>
                            <input type="text" placeholder="Informe a data de embargue" required/>
                        </div>
                        <div className="input-box">
                            <span className="details">Data de retorno</span>
                            <input type="text" placeholder="Informe a data de retorno" required/>
                        </div>
                        <div className="input-box">
                            <span className="details">Nome</span>
                            <input type="text" placeholder="Informe o seu nome" required/>
                        </div>
                            <div className="input-box">
                            <span className="details">CPF</span>
                            <input className="text" placeholder="Informe o seu CPF" required/>
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

export default RealizarReserva