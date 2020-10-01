import React from 'react';
import Default from './Default.js';
import MainPanel from './MainPanel.js';

class LoadButton extends React.Component{

    constructor(props){
        super(props);

        this.state = {id : this.props.id, text: this.props.text};

        this.startOpen = this.startOpen.bind(this);
    }

    render(){
        return(
            <div>
                <p>
                    <button onClick={this.startOpen}>{this.state.text}</button>
                </p>
            </div>
        )
    }

    startOpen(){
        this.setState({text: 'Opening'});
        MainPanel.loadCharacter(this.state.id);

    }
}

export default LoadButton