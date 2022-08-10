import React from "react";
import Weather from "./Weather";
import Spinner from "./Spinner";
class App extends React.Component {
    state = { lat: null, errMessage: "" }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => {
                return this.setState({ lat: position.coords.latitude })
            },
            err => {
                return this.setState({ errMessage: err.message })
            }
        );
    }

    renderComponets() {
        if (this.state.lat && !this.state.errMessage) {
            return (
                <Weather lat={this.state.lat} month={new Date().getMonth()} />
            );
        }
        if (!this.state.lat && this.state.errMessage) {
            return (
                <h1>{this.state.errMessage}</h1>
            );
        }
        return (
            <Spinner  message="Please Allow Location Access"/>
        );
    }

    render() {
        return (
            <div className="commonDivision">
                {this.renderComponets()}
            </div>
        );
    }
}

export default App;