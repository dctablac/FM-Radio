// Outer radio component

import { Component } from 'react';
import Control from "./Control";
import Display from "./Display";

class Radio extends Component {
    render() {
        return (
            <div id="radio">
                <Display />
                <Control />
            </div>
        )
    }
}

export default Radio;