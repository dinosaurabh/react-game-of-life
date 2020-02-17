import React from 'react';
import ReactDOM from 'react-dom';
import {ButtonToolbar, MenuItem, DropdownButton} from "react-bootstrap";

class ButtonComponent extends React.Component {

    render() {
        return (
            <div>
                <ButtonToolbar className = "center">
                    <button onClick = {this.props.playButton}>
                        Play
                    </button>
                    <button onClick = {this.props.pauseButton}>
                        Pause
                    </button>
                    <button onClick = {this.props.resetButton}>
                        Reset
                    </button>
                </ButtonToolbar>
            </div>
        )
    }
}

export default ButtonComponent;