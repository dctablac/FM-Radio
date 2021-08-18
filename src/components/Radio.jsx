// Outer radio component

import { Component } from 'react';
import Control from "./Control";
import Display from "./Display";

class Radio extends Component {

    state = {
        frequency: 89.7,
        volume: 0,
        volumeToAngle: {0: -60, 1: -36, 2: -12, 3: 12, 
            4: 36, 5: 60, 6: 84, 7: 108, 
            8: 132, 9: 156, 10: 180},
        draggable: "false",
        dragIcon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" className="bi bi-grip-vertical" viewBox="0 0 16 16">
        <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
      </svg>,
        showCancelIcon: false
    }

    // Called in Control component
    handleFrequencyChange = (freq) => {
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

    // Decrements volume in state
    handleVolumeDown = () => {
        const currVolume = this.state.volume;
        const knob = document.getElementById("volume-knob");
        const volumeToAngle = this.state.volumeToAngle;
        if (currVolume > 0) {
            this.setState({
                volume: Math.floor(currVolume - 1)
            }, () => {knob.style.transform = `rotate(${volumeToAngle[this.state.volume]}deg)`});
        }
    }

    // Increments volume in state
    handleVolumeUp = () => {
        const currVolume = this.state.volume;
        const knob = document.getElementById("volume-knob");
        const volumeToAngle = this.state.volumeToAngle;
        if (currVolume < 10) {
            this.setState({
                volume: Math.floor(currVolume + 1)
            }, () => {knob.style.transform = `rotate(${volumeToAngle[this.state.volume]}deg)`});
        }
        
    }

    // Change the volume display when volume knob is turned
    changeVolumeDisplay = (degree) => {
        if (degree < -55) {
            this.setState({
                volume: 0
            });
        }
        if (degree >= -36 && degree < -12) {
            this.setState({
                volume: 1
            });
        }
        else if (degree >= -12 && degree < 12) {
            this.setState({
                volume: 2
            });
        }
        else if (degree >= 12 && degree < 36) {
            this.setState({
                volume: 3
            });
        }
        else if (degree >= 36 && degree < 60) {
            this.setState({
                volume: 4
            });
        }
        else if (degree >= 60 && degree < 84) {
            this.setState({
                volume: 5
            });
        }
        else if (degree >= 84 && degree < 108) {
            this.setState({
                volume: 6
            });
        }
        else if (degree >= 108 && degree < 132) {
            this.setState({
                volume: 7
            });
        }
        else if (degree >= 132 && degree < 156) {
            this.setState({
                volume: 8
            });
        }
        else if (degree >= 156 && degree < 170) {
            this.setState({
                volume: 9
            });
        }
        else if (degree > 170) {
            this.setState({
                volume: 10
            });
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
                handleFrequencyChange={this.handleFrequencyChange}
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
                changeVolumeDisplay={this.changeVolumeDisplay}
                frequency={this.state.frequency} 
                isDraggable={this.state.draggable}
                showCancelIcon={this.state.showCancelIcon}
                dragIcon={this.state.dragIcon}
                volume={this.state.volume}
                />
            </div>
        )
    }
}

export default Radio;