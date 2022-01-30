import { Component } from "react";
import Oferta from '../components/Oferta';

class Home extends Component {
    render() {
        return <section className="offers" id="offers">
            <div className="box-container">
                <Oferta nome='Amesterdã' preco="3800" localizacao="Internacional - Holanda" />
                <Oferta nome='Amesterdã' preco="3800" localizacao="Internacional - Holanda" />
                <Oferta nome='Amesterdã' preco="3800" localizacao="Internacional - Holanda" />
                <Oferta nome='Amesterdã' preco="3800" localizacao="Internacional - Holanda" />
                <Oferta nome='Amesterdã' preco="3800" localizacao="Internacional - Holanda" />
                <Oferta nome='Amesterdã' preco="3800" localizacao="Internacional - Holanda" />
                <Oferta nome='Amesterdã' preco="3800" localizacao="Internacional - Holanda" />
                <Oferta nome='Amesterdã' preco="3800" localizacao="Internacional - Holanda" />
            </div>
        </section>
    }
}

export default Home