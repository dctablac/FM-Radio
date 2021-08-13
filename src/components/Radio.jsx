// Outer radio component

import { Component } from 'react';
import Control from "./Control";
import Display from "./Display";

class Radio extends Component {

    state = {
        frequency: 93.1,
        volume: 0,
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

    handleSaveIntent = () => {
        this.setState({
            showCancelIcon: true
        })
    }

    handleCancelSave = () => {
        this.setState({
            showCancelIcon: false
        })
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
                dragIcon={this.state.dragIcon}
                saveIntent={this.handleSaveIntent}
                cancelSave={this.handleCancelSave}
                showCancelIcon={this.state.showCancelIcon}
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
                showCancelIcon={this.state.showCancelIcon}
                cancelSave={this.handleCancelSave}
                dragIcon={this.state.dragIcon}
                />
            </div>
        )
    }
}

export default Radio;