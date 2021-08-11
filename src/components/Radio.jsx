// Outer radio component

import { Component } from 'react';
import Control from "./Control";
import Display from "./Display";

class Radio extends Component {

    state = {
        frequency: 87.9,
        volume: 0,
        draggable: "false",

    }

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

    // Handle mosue leaving drag icon
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
        ev.preventDefault();
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


    render() {
        return (
            <div id="radio">
                <Display frequency={this.state.frequency} 
                handleMouseEnter={this.handleMouseEnter}
                handleMouseLeave={this.handleMouseLeave}
                handleDragStart={this.handleDragStart}
                handleDragOver={this.handleDragOver}
                handleDragEnd={this.handleDragEnd}
                handleDragLeave={this.handleDragLeave}
                handleDrop={this.handleDrop}
                isDraggable={this.state.draggable}
                />
                <Control frequency={this.state.frequency} 
                onFrequencyChange={this.handleDisplayChange}
                handleMouseEnter={this.handleMouseEnter}
                handleMouseLeave={this.handleMouseLeave}
                handleDragStart={this.handleDragStart}
                handleDragOver={this.handleDragOver}
                handleDragEnd={this.handleDragEnd}
                handleDragLeave={this.handleDragLeave}
                handleDrop={this.handleDrop}
                isDraggable={this.state.draggable}
                />
            </div>
        )
    }
}

export default Radio;