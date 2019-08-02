import React from 'react';
import ReactDOM from 'react-dom';
import AppSX from './AppSX';
import AppDX from './AppDX';
import Header from './Header';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            postSelected: null,
            msg: 'Seleziona una news',
        }
    }
    render() {
        return (
            <div>
                <div class="row">
                    <div class="col-12" id="header"> <Header /></div>
                </div>
                <div class="row">
                    <div class="col-4" id="rootSX"><AppSX selezionaPost={(oggetto) => this.settaStato(oggetto)}/></div>
                    <div class="col-8" id="rootDX"><AppDX 
                    post = {this.state.postSelected} 
                    msg = {this.state.msg }/></div>
                </div>
            </div>
        )
    }

    settaStato(oggetto) {
        this.setState(
            oggetto
        )
    }
}
export default App;