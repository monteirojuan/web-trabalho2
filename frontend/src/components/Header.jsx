import { Component } from "react";
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return <header>
            <Link to="/" className="logo"><span>VIAJA</span>ROO</Link>
            <nav className="navbar">
                <Link to="/">Ofertas</Link>
                <Link to="/reservas">Reservas</Link>
            </nav>
            <div className="icons">
                <a href="#/" className="fas fa-heart"></a>
                <a href="#/" className="fas fa-user"></a>
            </div>
        </header>
    }
}

export default Header