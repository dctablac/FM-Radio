// Control panel

import { Component } from 'react';

class Control extends Component {
    
    state = {
        min: 87.9,
        max: 107.9,
        step: 0.2,
        station1: 87.9,
        station2: 87.9,
        station3: 87.9,
        station4: 87.9,
        station5: 87.9,
        station6: 87.9,
        restore_icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-play-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
      </svg>,
        volume_up_icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-plus-square" viewBox="0 0 16 16">
        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
      </svg>,
        volume_down_icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-dash-square" viewBox="0 0 16 16">
        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
      </svg>
    };

    handleFrequencyChange = (event) => {
        const newFrequency = event.target.value;
        this.props.onFrequencyChange(newFrequency)
    }

    // Save a station to the inputted slot
    handleSaveStationClick = (slot) => {
        if (this.props.showCancelIcon) { // If cancel intent is made
            this.setState({
                ["station"+slot]: this.props.frequency
            });
            this.props.cancelSave();
        }
        else { // Else set radio to saved frequency
            let savedFrequency = this.state["station"+slot];
            this.props.onFrequencyChange(savedFrequency);
        }
    }

    handleScroll = (e) => {
        if (e.deltaY < 0) { // Scrolled up
            this.props.volumeUp();
        }
        else {
            this.props.volumeDown();
        }
    };

    render() {
        return (
            <div id="control" className="panel" 
            draggable={this.props.isDraggable}
            onDragStart={this.props.handleDragStart}
            onDragOver={this.props.handleDragOver}
            onDragEnd={this.props.handleDragEnd}
            onDragLeave={this.props.handleDragLeave}
            onDrop={this.props.handleDrop}
            >

                <div id="drag-control" className="drag-icon" 
                onMouseEnter={this.props.handleMouseEnter}
                onMouseLeave={this.props.handleMouseLeave}>
                    {this.props.dragIcon}
                </div>

                <div id="saved-stations">
                    <div className="saved-station">
                        <p className="saved-station-display">{this.state.station1}</p>
                        <button className="btn btn-restore" onClick={() => this.handleSaveStationClick(1)}>
                            {!this.props.showCancelIcon && this.state.restore_icon}
                            {this.props.showCancelIcon && "SAVE"}
                            </button>
                    </div>
                    <div className="saved-station">
                        <p className="saved-station-display">{this.state.station2}</p>
                        <button className="btn btn-restore" onClick={() => this.handleSaveStationClick(2)}>
                            {!this.props.showCancelIcon && this.state.restore_icon}
                            {this.props.showCancelIcon && "SAVE"}
                        </button>
                    </div>
                    <div className="saved-station">
                        <p className="saved-station-display">{this.state.station3}</p>
                        <button className="btn btn-restore" onClick={() => this.handleSaveStationClick(3)}>
                            {!this.props.showCancelIcon && this.state.restore_icon}
                            {this.props.showCancelIcon && "SAVE"}
                        </button>
                    </div>
                    <div className="saved-station">
                        <p className="saved-station-display">{this.state.station4}</p>
                        <button className="btn btn-restore" onClick={() => this.handleSaveStationClick(4)}>
                            {!this.props.showCancelIcon && this.state.restore_icon}
                            {this.props.showCancelIcon && "SAVE"}
                        </button>
                    </div>
                    <div className="saved-station">
                        <p className="saved-station-display">{this.state.station5}</p>
                        <button className="btn btn-restore" onClick={() => this.handleSaveStationClick(5)}>
                            {!this.props.showCancelIcon && this.state.restore_icon}
                            {this.props.showCancelIcon && "SAVE"}
                        </button>
                    </div>
                    <div className="saved-station">
                        <p className="saved-station-display">{this.state.station6}</p>
                        <button className="btn btn-restore" onClick={() => this.handleSaveStationClick(6)}>
                            {!this.props.showCancelIcon && this.state.restore_icon}
                            {this.props.showCancelIcon && "SAVE"}
                        </button>
                    </div>
                </div>

                <div id="knobs">
                    <div id="frequency-slider-container">
                        <input type="range" name="frequency-knob" 
                        id="frequency-slider" value={this.props.frequency} 
                        onChange={this.handleFrequencyChange} min={this.state.min} 
                        max={this.state.max} step={this.state.step}/>
                    </div>
                    <div id="volume-knob-container">
                        <div className="volume-btn" onClick={this.props.volumeDown}>
                            {this.state.volume_down_icon}
                        </div>
                        <div id="volume-knob" onWheel={this.handleScroll}>
                            <p id="volume-knob-tooltip">Scroll or press buttons to change volume</p>
                            {this.props.volumeArm}
                        </div>
                        <div className="volume-btn" onClick={this.props.volumeUp}>
                            {this.state.volume_up_icon}
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Control;