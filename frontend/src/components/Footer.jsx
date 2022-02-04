import { Component } from "react";
import Contato from "./Contato";
import Servicos from "./Servicos";

class Footer extends Component {
    render() {
        return <footer>
            <Contato />
            <Servicos />
        </footer>
    }
}
export default Footer