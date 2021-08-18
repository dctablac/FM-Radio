import { Component } from "react";
import Radio from "./Radio.jsx";

class App extends Component {

    state = {
        tooltipIcon: <svg preserveAspectRatio="xMinYMin meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" id="tip-icon" className="bi bi-question-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
                      </svg>,
        hideTips: true
    }

    displayTips = () => {
        const hideTips = this.state.hideTips;
        if (hideTips) {
            this.setState({
                hideTips: false
            });
        }
        else {
            this.setState({
                hideTips: true
            });
        }
    }

    render() {
        return (
            <div id="app">
                <div id="tips-container">

                    {!this.state.hideTips && 
                    <div id="tips">
                        <p>Frequency: Click and drag to adjust the slider.</p>
                        <br/>
                        <p>Volume: Drag and rotate the dial on the volume knob. You may also scroll over the knob or use the -/+ buttons.</p>
                    </div>}

                    <div id="tip-icon-container" onClick={this.displayTips}>
                        {this.state.tooltipIcon}
                    </div>
                    
                </div>
                <Radio/>
            </div>
        )
    }
}

export default App;