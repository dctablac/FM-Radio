// Display panel

import { Component } from 'react';

class Display extends Component {

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
                onMouseLeave={this.props.handleMouseLeave}>
                    {this.props.dragIcon}
                </div>

                <div id="screen">
                    <p id="fm-tag">FM</p>
                    <p id="screen-frequency-value">{this.props.frequency}<span id="MHz-tag">MHz</span></p>
                    <p id="screen-volume-tag">VOLUME: {this.props.volume}</p>
                </div>
                
                <div id="speakers-container">
                    <div className="speakers">
                        <div className="speaker-line"></div>
                        <div className="speaker-line"></div>
                        <div className="speaker-line"></div>
                        <div className="speaker-line"></div>
                        <div className="speaker-line"></div>
                        <div className="speaker-line"></div>
                        <div className="speaker-line"></div>
                        <div className="speaker-line"></div>
                        <div className="speaker-line"></div>
                        <div className="speaker-line"></div>
                        <div className="speaker-line"></div>
                        <div className="speaker-line"></div>
                        <div className="speaker-line"></div>
                        <div className="speaker-line"></div>
                        <div className="speaker-line"></div>
                        <div className="speaker-line"></div>
                        <div className="speaker-line"></div>
                        <div className="speaker-line"></div>
                        <div className="speaker-line"></div>
                        <div className="speaker-line"></div>
                    </div>
                    <div id="display-btn-container">
                        {!this.props.showCancelIcon && <button id="btn-save" className="btn" onClick={this.props.saveIntent}>SAVE</button>}
                        {this.props.showCancelIcon && <button id="btn-cancel" className="btn" onClick={this.props.cancelSave}>CANCEL</button>}
                    </div>
                    <div className="speakers">
                        <div className="speaker-line"></div>
                        <div className="speaker-line"></div>
                        <div className="speaker-line"></div>
                        <div className="speaker-line"></div>
                        <div className="speaker-line"></div>
                        <div className="speaker-line"></div>
                        <div className="speaker-line"></div>
                        <div className="speaker-line"></div>
                        <div className="speaker-line"></div>
                        <div className="speaker-line"></div>
                        <div className="speaker-line"></div>
                        <div className="speaker-line"></div>
                        <div className="speaker-line"></div>
                        <div className="speaker-line"></div>
                        <div className="speaker-line"></div>
                        <div className="speaker-line"></div>
                        <div className="speaker-line"></div>
                        <div className="speaker-line"></div>
                        <div className="speaker-line"></div>
                        <div className="speaker-line"></div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Display;