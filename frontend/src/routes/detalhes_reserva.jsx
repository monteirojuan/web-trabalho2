import { Component } from "react";
import { useParams } from "react-router-dom";
import FormularioReserva from "../components/FormularioReserva";

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}

class DetalhesReserva extends Component {
    render() {
        return < FormularioReserva id_reserva={this.props.params.id} />
    }
}

export default withParams(DetalhesReserva)