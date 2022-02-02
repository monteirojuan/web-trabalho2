import { Component } from "react";

class Oferta extends Component {
    render() {
        return <div class="box">
            <div class="image-container">
                <img src={"./imagens/destinos/" + this.props.nome.toLowerCase() + ".jpg"} alt="" />
                <div class="info">
                    <h3>1 hora atrás</h3>
                </div>

                <div class="icons">
                    <a href="#" class="fas fa-star"><h3>5</h3></a>
                    <a href="#" class="fas fa-camera"><h3>2</h3></a>
                </div>
            </div>
            <div class="content">
                <div class="price">
                    <h3>R$ {this.props.preco} </h3>
                    <a href="#" class="fas fa-heart"></a>
                    <a href="#" class="fas fa-envelope"></a>
                    <a href="#" class="fas fa-phone"></a>
                </div>
                <div class="location">
                    <h3>{this.props.nome}</h3>
                    <p>{this.props.localizacao}</p>
                </div>
                <div class="buttons">
                    <a href="#" class="btn">Reserva</a>
                    <a href="#" class="btn">Detalhes</a>
                </div>
            </div>
        </div>
    }
}

export default Oferta