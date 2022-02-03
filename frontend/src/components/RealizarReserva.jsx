import { Component } from "react";

class RealizarReserva extends Component {
    render() {
        return <section className="reserva" id="reversa">
            <h1 className="heading"><span>Reserva</span></h1>

            <div className="row">
                <form action="">
                    <div className="inputBox">
                        <input type="text" placeholder="Destino" />
                        <input type="text" placeholder="Quantidade" />
                    </div>

                    <div className="inputBox">
                        <input type="text" placeholder="Data de ida" />
                        <input type="text" placeholder="Data de retorno" />
                    </div>

                    <div className="inputBox">
                        <input type="text" placeholder="Nome completo" />
                        <input type="text" placeholder="CPF" />
                    </div>

                    <input type="submit" value={"Comprar"} className="btn" />
                    
                </form>
            </div>
        </section>
    }
}