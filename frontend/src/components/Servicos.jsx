import { Component } from "react";

class Servicos extends Component {
    render() {
        return <section class="services" id="services">
            <h1 class="heading"><span>Serviços</span></h1>
            <div class="box-container">
                <div class="box">
                    <img src="./imagens/mala.png" alt="" />
                    <h3>Bagagem</h3>
                    <p>Serviços de bagagem  customizável e com garantia de perda.</p>
                    <a href="#" class="btn">saber mais</a>
                </div>

                <div class="box">
                    <img src="./imagens/price-tag-fill.png" alt="" />
                    <h3>Preços</h3>
                    <p>Pacotes de viagens que se ajustam as necessidades.</p>
                    <a href="#" class="btn">saber mais</a>
                </div>

                <div class="box">
                    <img src="./imagens/map.png" alt="" />
                    <h3>Explore</h3>
                    <p>Cobertura até mesmo nos cantos mais remotos!</p>
                    <a href="#" class="btn">saber mais</a>
                </div>
            </div>
        </section>
    }
}
export default Servicos