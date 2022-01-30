import { Component } from "react";
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return <header>
            <Link to="/" className="logo"><span>VIAJA</span>ROO</Link>
            <nav class="navbar">
                <Link to="/">Ofertas</Link>
                <Link to="/reservas">Reservas</Link>
            </nav>
            <div class="icons">
                <a href="#/" class="fas fa-heart"></a>
                <a href="#/" class="fas fa-user"></a>
            </div>
        </header>
    }
}

export default Header