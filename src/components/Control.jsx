// Control panel

import { Component } from 'react';

class Control extends Component {

    state = {
        min: 87.9,
        max: 107.9,
        step: 0.2,
        station_1: 87.9,
        station_2: 87.9,
        station_3: 87.9,
        station_4: 87.9,
        station_5: 87.9,
        station_6: 87.9,
        restore_icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-play-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
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
                ["station_"+slot]: this.props.frequency
            });
            this.props.cancelSave();
        }
        else { // Else set radio to saved frequency
            let savedFrequency = this.state["station_"+slot];
            this.props.onFrequencyChange(savedFrequency);
        }
        
    }

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
                        <p className="station-display">{this.state.station_1}</p>
                        <button className="btn btn-restore" 
                        onClick={() => this.handleSaveStationClick(1)}>
                            {!this.props.showCancelIcon && this.state.restore_icon}
                            {this.props.showCancelIcon && "SAVE"}
                            </button>
                    </div>
                    <div className="saved-station">
                        <p className="station-display">{this.state.station_2}</p>
                        <button className="btn btn-restore" 
                        onClick={() => this.handleSaveStationClick(2)}>
                            {!this.props.showCancelIcon && this.state.restore_icon}
                            {this.props.showCancelIcon && "SAVE"}
                        </button>
                    </div>
                    <div className="saved-station">
                        <p className="station-display">{this.state.station_3}</p>
                        <button className="btn btn-restore" 
                        onClick={() => this.handleSaveStationClick(3)}>
                            {!this.props.showCancelIcon && this.state.restore_icon}
                            {this.props.showCancelIcon && "SAVE"}
                        </button>
                    </div>
                    <div className="saved-station">
                        <p className="station-display">{this.state.station_4}</p>
                        <button className="btn btn-restore" 
                        onClick={() => this.handleSaveStationClick(4)}>
                            {!this.props.showCancelIcon && this.state.restore_icon}
                            {this.props.showCancelIcon && "SAVE"}
                        </button>
                    </div>
                    <div className="saved-station">
                        <p className="station-display">{this.state.station_5}</p>
                        <button className="btn btn-restore" 
                        onClick={() => this.handleSaveStationClick(5)}>
                            {!this.props.showCancelIcon && this.state.restore_icon}
                            {this.props.showCancelIcon && "SAVE"}
                        </button>
                    </div>
                    <div className="saved-station">
                        <p className="station-display">{this.state.station_6}</p>
                        <button className="btn btn-restore" 
                        onClick={() => this.handleSaveStationClick(6)}>
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
                    <div id="volume"></div>
                </div>
            </div>
        );
    }
}

export default Control;