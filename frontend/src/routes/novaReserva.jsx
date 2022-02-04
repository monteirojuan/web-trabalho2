import { Component } from "react";
import { useParams } from "react-router-dom";
import RealizarReserva from "../components/FormularioReserva";

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}

class NovaReserva extends Component {
    render() {
        return < RealizarReserva id_destino={this.props.params.id} />
    }
}

export default withParams(NovaReserva)