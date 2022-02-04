import { Component } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import FormularioReserva from "../components/FormularioReserva";

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}

class NovaReserva extends Component {
    constructor(props) {
        super()
        this.state = {}
        this.reserva_id = props.params.id;
    }

    componentDidMount() {
        axios.get('http://localhost:4000/destino/' + this.reserva_id)
            .then(res => {
                this.setState(res.data)
            })

    }
    render() {
        return < FormularioReserva id_destino={this.state.id} nome={this.state.nome} />
    }
}

export default withParams(NovaReserva)