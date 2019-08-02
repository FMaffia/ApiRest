
import React from 'react'
import Logo from './logo.png'
import Menu from './Menu';
import './index.scss'
class Header extends React.Component {
    render() {
        return (
            <div class="jumbotron">
                <h1 class="display-4">React News</h1>
                <img width="150px" style={{float: 'left'}} src={Logo} alt="Card image cap"></img>
                <p class="lead">
                    Esercitazione Servizi Rest </p> <br></br>
                <p>Mafr - August 2019</p>
                <hr class="my-4" />
            </div>

        )
    }
}
export default Header;