// Display panel

import { Component } from 'react';

class Display extends Component {

    handleDragStart = (ev) => {
        console.log(ev.target.id);

    }

    render() {
        return (
            <div id="display" className="panel" 
            draggable={this.props.isDraggable}
            onDragStart={this.props.handleDragStart}
            onDragOver={this.props.handleDragOver}
            onDragEnd={this.props.handleDragEnd}
            onDragLeave={this.props.handleDragLeave}
            onDrop={this.props.handleDrop}
            >
                <div id="drag-display" className="drag-icon"
                onMouseEnter={this.props.handleMouseEnter}
                onMouseLeave={this.props.handleMouseLeave}
                ></div>
                <div id="screen">
                    <p>FM</p>
                    <p id="frequency-value">{this.props.frequency}<span>MHz</span></p>
                </div>
                <button id="btn-save" className="btn">SAVE</button>
            </div>
        );
    }
}

export default Display;