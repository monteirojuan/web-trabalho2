import { Component } from "react";
import axios from 'axios';
import Oferta from '../components/Oferta';

class Home extends Component {
    state = {
        destinos: []
    }
    componentDidMount() {
        axios.get('http://localhost:4000/destinos')
            .then(res => {
                this.setState(res.data)
            })

    }

    render() {
        return <section className="offers" id="offers">
            <div className="box-container">
                {
                    this.state.destinos
                        .map(destino =>
                            <Oferta key={destino.id} nome={destino.nome} preco={destino.preco} id_destino={destino.id} />
                        )
                }
            </div>
        </section>
    }
}

export default Home