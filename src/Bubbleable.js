import React from 'react';
import CharacterData from './CharacterData.js';
import CharacterComponent from './CharacterComponent.js';
import Default from './Default.js';
import Stat from './Stat.js';
import radioOn from './radio-on.svg';
import radioOff from './radio-off.svg';

class Bubbleable extends CharacterComponent{

    constructor(props){
        super(props);

        this.state['name'] = Default(props.name, '');
        this.state['backingStat'] = Default(props.backingStat, 'str');
        this.state['active'] = Default(props.active, false);
        this.state['hideBackingStat'] = Default(props.hideBackingStat, false);
        this.state['style'] = Default(props.style, {});
        this.state['backingVar'] = Default(props.backingVar, '');

        this.getBackingHTML = this.getBackingHTML.bind(this);
        this.calcScore = this.calcScore.bind(this);
        this.getScoreHTML = this.getScoreHTML.bind(this);
        this.toggle = this.toggle.bind(this);
        this.getButton = this.getButton.bind(this);

        this.isActive = this.isActive.bind(this);
    }
    
    render(){
        return(
            <p onClick={this.toggle} style={this.state.style}>
                {this.getButton()}
                &nbsp;
                {this.state.name}
                {this.getBackingHTML()}:
                &nbsp;
                {this.getScoreHTML(this.calcScore())}
            </p>
        )
    }

    isActive(){
        var active = this.state.active;
        if(this.state.backingVar !== ''){
            active = this.characterData.state[this.state.backingVar];
        }
        return active;
    }
    
    toggle(){
        var active = !this.isActive();

        this.setState({active: active});
        
        if(this.state.backingVar !== ''){
            var deltaState = {};
            deltaState[this.state.backingVar] = active;

            this.characterData.setState(deltaState);
        }
    }

    getBackingHTML(){
        if(this.state.hideBackingStat){
            return null;
        }
        else{
            return (
                <span>
                    &nbsp;
                    ({this.state.backingStat})
                </span>
            );
        }
    }

    calcScore(){
        var num = this.characterData.getMod(this.state.backingStat);

        if(this.isActive()){
            num = num + parseInt(this.characterData.state.profBonus);
        }
        return num;
    }

    getScoreHTML(score){
        if(score >= 0){
            return '+' + score;
        }
        else{
            return score;
        }
    }

    getButton(){
        if(this.isActive()){
            return(
                <img 
                    src={radioOn} 
                    style={{width: '0.7em', height: '0.7em'}}
                    onClick={this.toggle}
                />
            )
        }
        else{
            return(
                <img 
                    src={radioOff} 
                    style={{width: '0.7em', height: '0.71em'}}
                    onClick={this.toggle}
                />
            )
        }
    }
}

export default Bubbleable;