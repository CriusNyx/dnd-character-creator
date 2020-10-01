import React from 'react';
import CharacterData from './CharacterData.js';
import CharacterComponent from './CharacterComponent.js';
import Default from './Default.js';

class Stat extends CharacterComponent{

    constructor(props){
        super(props);

        this.state['name'] = Default(props.name, '');
        this.state['hideMod'] = Default(props.hideMod, false);
        this.state['displayName'] = Default(props.displayName, this.state.name.toUpperCase());
        this.state['inputStyle'] = Default(props.inputStyle, {});
        this.state['style'] = Default(props.style, {});
        this.state['className'] = Default(props.className, {})

        this.onChange = this.onChange.bind(this);
    }

    render(){

        var name = this.state.name;
        var displayName = this.state.displayName;
        var score = this.characterData.state[name];
        var mod = this.getModDisplay(Stat.calcMod(score));
        mod = "(" + mod + ")";
        if(this.state.hideMod) mod = '';

        return (
            <span className={this.state.className} style={this.state.style}>
                {displayName}:
                &nbsp;
                <br/>
                <input type='p'
                    name={name}
                    onChange={this.onChange}
                    value={this.characterData.state[name]}
                    style={this.state.inputStyle}
                    className='stat-box'
                />
                {mod}
            </span>
        )
    }

    onChange(event){
        var value = event.target.value;
        var deltaState = {};
        deltaState[this.state.name] = value;
        this.characterData.setState(deltaState);
    }

    
    getModDisplay(mod){
        if(mod >= 0){
            return '+' + mod;
        }
        else{
            return mod;
        }
    }
    static calcMod(score){
        return Math.floor(score / 2) - 5
    }
}

export default Stat;