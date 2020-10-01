import React from 'react';
import CharacterComponent from './CharacterComponent.js';
import Default from './Default.js'

const buttonColor = '#202020';
const buttonColorPressed = 'white'

class ButtonNState extends React.Component{

    constructor(props){
        super(props);

        this.state = {};

        this.state['option1'] = Default(props.option1, 'o1');
        this.state['var1'] = Default(props.var1, this.state.option1);
        this.state['option2'] = Default(props.option2, 'o2');
        this.state['var2'] = Default(props.var2, this.state.option2);

        var options = Default(props.options, null);

        var buttons = Default(props.buttons, 
            [
                {optionName: this.state.option1, varName: this.state.var1},
                {optionName: this.state.option2, varName: this.state.var2}
            ]);

        if(options != null){
            buttons = options.map((x)=>{return {optionName: x, varName: x}});
        }


        this.state['buttons'] = buttons

        this.state['nullValue'] = Default(props.nullValue, '');

        this.state['value'] = Default(props.value, this.state.nullState);
        // this.state['valueFunc'] = Default(props.valueFunc, () => {return ''})

        this.state['stateChange'] = Default(props.stateChange, (x) => {});

        this.onClick = this.onClick.bind(this);
        this.optionToButton = this.optionToButton.bind(this);
    }

    render(){
        var buttons = this.state.buttons.map(this.optionToButton);

        // return null;

        return(
            <div className='weapon-stat-button' style={{padding: 0, backgroundColor: buttonColor, display: 'inline-flex', border: '3px solid white'}}>
                {/* <button
                    className='weapon-stat-button' 
                    style={this.getButtonStyle(this.state.var1)}
                    onClick={() => this.onClick(this.state.var1)}
                    >
                    {this.state.option1}
                </button>
                <button 
                    className='weapon-stat-button'
                    style={this.getButtonStyle(this.state.var2)}
                    onClick={() => this.onClick(this.state.var2)}
                    >
                    {this.state.option2}
                </button> */}
                {buttons}
            </div>
        )
    }

    optionToButton(option, index){
        return(
            <React.Fragment key={index}>
                <button
                    className='weapon-stat-button'
                    style={this.getButtonStyle(option.varName)}
                    onClick={()=>this.onClick(option.varName)}
                >
                    {option.optionName}
                </button>
            </React.Fragment>
        )
    }

    getButtonStyle(button){
        if(this.state.value == button){
            return {backgroundColor: buttonColorPressed, color: buttonColor}
        }
        else{
            return {backgroundColor: buttonColor, color: buttonColorPressed}
        }
    }

    onClick(selected){
        if(this.state.value === selected){
            this.setState({value: this.state.nullValue});
            this.state.stateChange(this.state.nullValue);
        }
        else{
            this.setState({value: selected});
            this.state.stateChange(selected);
        }
    }
}

export default ButtonNState;