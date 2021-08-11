// Control panel

import { Component } from 'react';

class Control extends Component {

    state = {
        min: 87.9,
        max: 107.9,
        step: 0.2,
        station_1: "---",
        station_2: "---",
        station_3: "---",
        station_4: "---",
        station_5: "---",
        station_6: "---"
    };

    handleFrequencyChange = (event) => {
        const newFrequency = event.target.value;
        this.props.onFrequencyChange(newFrequency)
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
                onMouseLeave={this.props.handleMouseLeave}
                >
                </div>
                <div id="saved-stations">
                    <div className="saved-station">
                        <p className="station-display">{this.state.station_1}</p>
                        <button className="btn btn-go">GO</button>
                    </div>
                    <div className="saved-station">
                        <p className="station-display">{this.state.station_2}</p>
                        <button className="btn btn-go">GO</button>
                    </div>
                    <div className="saved-station">
                        <p className="station-display">{this.state.station_3}</p>
                        <button className="btn btn-go">GO</button>
                    </div>
                    <div className="saved-station">
                        <p className="station-display">{this.state.station_4}</p>
                        <button className="btn btn-go">GO</button>
                    </div>
                    <div className="saved-station">
                        <p className="station-display">{this.state.station_5}</p>
                        <button className="btn btn-go">GO</button>
                    </div>
                    <div className="saved-station">
                        <p className="station-display">{this.state.station_6}</p>
                        <button className="btn btn-go">GO</button>
                    </div>
                </div>
                <div id="knobs">
                    <div id="frequency-slider">
                        <input type="range" name="frequency" 
                        id="frequency" value={this.props.frequency} 
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