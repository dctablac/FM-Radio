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
                onMouseLeave={this.props.handleMouseLeave}
                >
                    {this.props.dragIcon}
                </div>
                <div id="screen">
                    <p>FM</p>
                    <p id="frequency-value">{this.props.frequency}<span>MHz</span></p>
                </div>
                <div id="speakers-container">
                    <div className="speakers">
                        <div className="speaker"></div>
                        <div className="speaker"></div>
                        <div className="speaker"></div>
                        <div className="speaker"></div>
                        <div className="speaker"></div>
                        <div className="speaker"></div>
                        <div className="speaker"></div>
                        <div className="speaker"></div>

                        <div className="speaker"></div>
                        <div className="speaker"></div>
                        <div className="speaker"></div>
                        <div className="speaker"></div>
                        <div className="speaker"></div>
                        <div className="speaker"></div>
                        <div className="speaker"></div>
                        <div className="speaker"></div>

                        <div className="speaker"></div>
                        <div className="speaker"></div>
                        <div className="speaker"></div>
                        <div className="speaker"></div>
                    </div>
                    <div id="display-btn-container">
                        <button id="btn-save" className="btn" onClick={this.props.saveIntent}>SAVE</button>
                        {this.props.showCancelIcon && <button id="btn-cancel" className="btn" onClick={this.props.cancelSave}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                            fill="currentColor" className="bi bi-x-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>
                        </button>}
                    </div>
                    <div className="speakers">
                        <div className="speaker"></div>
                        <div className="speaker"></div>
                        <div className="speaker"></div>
                        <div className="speaker"></div>
                        <div className="speaker"></div>
                        <div className="speaker"></div>
                        <div className="speaker"></div>
                        <div className="speaker"></div>

                        <div className="speaker"></div>
                        <div className="speaker"></div>
                        <div className="speaker"></div>
                        <div className="speaker"></div>
                        <div className="speaker"></div>
                        <div className="speaker"></div>
                        <div className="speaker"></div>
                        <div className="speaker"></div>

                        <div className="speaker"></div>
                        <div className="speaker"></div>
                        <div className="speaker"></div>
                        <div className="speaker"></div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Display;