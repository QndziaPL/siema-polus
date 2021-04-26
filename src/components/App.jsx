import React, {Component} from "react"
import "../css/App.css"
import {ExtendedAppContainer, FajnyHeader} from "../styled/App.styled";

class App extends Component {
    state = {
        strona: 1
    }

    zmienStrone = (numerStrony) => {
        this.setState({
            strona: numerStrony
        })
    }
    renderujOdpowiedniEkran = () => {
        switch (this.state.strona){
            case 1:
                return <EkranPowitalny zmienStrone={this.zmienStrone} />
            case 2:
                return <DrugiEkran zmienStrone={this.zmienStrone} />
            default:
                return <div>error</div>
        }
    }

    render() {
        return (
            <div>
                {this.renderujOdpowiedniEkran()}
            </div>
        );
    }
}

const EkranPowitalny = () => {
    return <div>
        <h5>siemaneczko</h5>
        <p>wybierz coś tutaj</p>
        <button>przejdź dalej</button>
    </div>
}

const DrugiEkran = () => {
    return <div>
        <h5>siemaneczko</h5>
        <p>wybierz coś tutaj</p>
        <button>przejdź dalej</button>
    </div>
}




export default App;