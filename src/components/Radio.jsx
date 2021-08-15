// Outer radio component

import { Component } from 'react';
import Control from "./Control";
import Display from "./Display";

class Radio extends Component {

    state = {
        frequency: 87.9,
        volume: 0,
        volumeToAngle: {0: -60, 1: -30, 2: 0, 3: 30, 
            4: 60, 5: 90, 6: 120, 7: 150, 
            8: 180, 9: 210, 10: 240},
        volumeArm: <div id="volume-arm"></div>,
        draggable: "false",
        dragIcon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" className="bi bi-grip-vertical" viewBox="0 0 16 16">
        <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
      </svg>,
        showCancelIcon: false
    }

    // Handler for Display component, called in Control component
    handleDisplayChange = (freq) => {
        this.setState({
            frequency: freq
        })
    }

    // Handle mouse entering drag icon
    handleMouseEnter = () => {
        this.setState({
            draggable: "true"
        })
    }

    // Handle mouse leaving drag icon
    handleMouseLeave = () => {
        this.setState({
            draggable: "false"
        })
    }

    // Handle start of dragging panel
    handleDragStart = (ev) => {
        ev.target.style.opacity = ".3";
        this.setState({
            dragged: ev.target
        })
    }

    // What happens when a panel is being dragged over
    handleDragOver = (ev) => {
        ev.preventDefault(); // allows drop
        if (ev.target.className === "panel") {
            ev.target.style.border = "5px solid white";
        }
    }

    // Handle end of drag
    handleDragEnd = (ev) => {
        ev.target.style.opacity = ""
        if (ev.target.className === "panel") {
            ev.target.style.border = "";
        }
    }

    // Handle area that is no longer being dragged over
    handleDragLeave = (ev) => {
        if (ev.target.className === "panel") {
            ev.target.style.border = "";
        }
    }

    // Handle what happens when and where the panel is dropped
    handleDrop = (ev) => {
        ev.preventDefault();
        if (ev.target.className === "panel") {
            ev.target.style.border = ""
            const parent = ev.target.parentNode; // Radio component

            if (ev.target === parent.childNodes[0]) { // Switching with first/left element
                ev.target.insertAdjacentElement("beforebegin",this.state.dragged);
            }
            else { // Switching with second/right element
                ev.target.insertAdjacentElement("afterend",this.state.dragged);
            }
        }
    }

    // Shows cancel icon underneath save station button
    handleSaveIntent = () => {
        this.setState({
            showCancelIcon: true
        })
    }

    // Hides cancel save button
    handleCancelSave = () => {
        this.setState({
            showCancelIcon: false
        })
    }

    // Sets volume knob on UI according to volume in state
    adjustVolumeKnob = () => {
        const volume = this.state.volume;
        const volumeToAngle = this.state.volumeToAngle;

        const newStyle = {'transform': 'rotate('+volumeToAngle[volume]+'deg) translateY(-5%)'}

        let newVolumeArm = <div id="volume-arm" style={newStyle}></div>

        this.setState({
            volumeArm: newVolumeArm
        })
    }

    // Decrements volume in state
    handleVolumeDown = () => {
        const currVolume = this.state.volume;
        if (currVolume > 0) {
            this.setState({
                volume: currVolume - 1
            }, this.adjustVolumeKnob);
            
        }
    }

    // Increments volume in state
    handleVolumeUp = () => {
        const currVolume = this.state.volume;
        if (currVolume < 10) {
            this.setState({
                volume: currVolume + 1
            }, this.adjustVolumeKnob);
        }
    }

    render() {
        return (
            <div id="radio">
                <Display 
                handleMouseEnter={this.handleMouseEnter}
                handleMouseLeave={this.handleMouseLeave}
                handleDragStart={this.handleDragStart}
                handleDragOver={this.handleDragOver}
                handleDragEnd={this.handleDragEnd}
                handleDragLeave={this.handleDragLeave}
                handleDrop={this.handleDrop}
                saveIntent={this.handleSaveIntent}
                cancelSave={this.handleCancelSave}
                frequency={this.state.frequency}
                isDraggable={this.state.draggable}
                showCancelIcon={this.state.showCancelIcon}
                dragIcon={this.state.dragIcon}
                volume={this.state.volume}
                />
                <Control 
                onFrequencyChange={this.handleDisplayChange}
                handleMouseEnter={this.handleMouseEnter}
                handleMouseLeave={this.handleMouseLeave}
                handleDragStart={this.handleDragStart}
                handleDragOver={this.handleDragOver}
                handleDragEnd={this.handleDragEnd}
                handleDragLeave={this.handleDragLeave}
                handleDrop={this.handleDrop}
                cancelSave={this.handleCancelSave}
                volumeDown={this.handleVolumeDown}
                volumeUp={this.handleVolumeUp}
                frequency={this.state.frequency} 
                isDraggable={this.state.draggable}
                showCancelIcon={this.state.showCancelIcon}
                dragIcon={this.state.dragIcon}
                volume={this.state.volume}
                volumeArm={this.state.volumeArm}
                />
            </div>
        )
    }
}

export default Radio;