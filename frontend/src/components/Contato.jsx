import { Component } from "react";

class Contato extends Component {
    render() {
        return <section className="contact" id="contact">
            <h1 className="heading"> <span>Contato</span></h1>
            <div className="icons-container">
                <div className="icons">
                    <img src="./imagens/phone-fill.png" alt="" />
                    <h3>Telefone</h3>
                    <p>+555-103-651</p>
                    <p>+367-784-009</p>
                </div>
                <div className="icons">
                    <img src="./imagens/mail-fill.png" alt="" />
                    <h3>Email</h3>
                    <p>vijaroo_travel@gmail.com</p>
                    <p>vijaroo_suporte@gmail.com</p>
                </div>
                <div className="icons">
                    <img src="./imagens/map-pin-fill.png" alt="" />
                    <h3>Endereço</h3>
                    <p>Rua Felipe Travoso, 1024, Russas-CE</p>
                </div>
            </div>
        </section>
    }
}
export default Contato