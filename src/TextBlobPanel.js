import React from 'react';
import CharacterComponent from './CharacterComponent.js';
import TextAreaAutosize from 'react-autosize-textarea';
import Default from './Default.js';

class TextBlobPanel extends CharacterComponent{

    constructor(props){
        super(props);

        this.state['className'] = Default(props.className, '');
        this.state['style'] = Default(props.style, {});

        this.state['name'] = Default(props.name, 'Please enter a name for panel');
        this.state['backingVar'] = Default(props.backingVar, '');
        this.state['placeholder'] = Default(props.placeholder, '');

        this.onChange = this.onChange.bind(this);
    }













    render(){
        return(
            <div className={this.state.className} style={this.state.style}>
                <h4>
                    {this.state.name}
                </h4>
                <TextAreaAutosize 
                    className='stat-box' 
                    style={{fontSize: 'large', width: '95%'}} 
                    value={this.characterData.state[this.state.backingVar]}
                    placeholder = {this.state.placeholder}
                    onChange={this.onChange}
                />  
            </div>
        )
    }

















    onChange(event){
        var deltaState={};

        deltaState[this.state.backingVar] = event.target.value;

        this.characterData.setState(deltaState);
    }
}

export default TextBlobPanel;