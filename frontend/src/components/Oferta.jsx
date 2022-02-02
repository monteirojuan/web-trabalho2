import { Component } from "react";

class Oferta extends Component {
    render() {
        return <div className="box">
            <div className="image-container">
                <img src={"./imagens/destinos/" + this.props.nome.toLowerCase() + ".jpg"} alt="" />
                <div className="info">
                    <h3>1 hora atrás</h3>
                </div>

                <div className="icons">
                    <a href="#" className="fas fa-star"><h3>5</h3></a>
                    <a href="#" className="fas fa-camera"><h3>2</h3></a>
                </div>
            </div>
            <div className="content">
                <div className="price">
                    <h3>R$ {this.props.preco} </h3>
                    <a href="#" className="fas fa-heart"></a>
                    <a href="#" className="fas fa-envelope"></a>
                    <a href="#" className="fas fa-phone"></a>
                </div>
                <div className="location">
                    <h3>{this.props.nome}</h3>
                    <p>{this.props.localizacao}</p>
                </div>
                <div className="buttons">
                    <a href="#" className="btn">Reserva</a>
                    <a href="#" className="btn">Detalhes</a>
                </div>
            </div>
        </div>
    }
}

export default Oferta