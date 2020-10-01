import React from 'react';
import Stat from './Stat.js';
import CharacterData from './CharacterData.js';
import CharacterComponent from './CharacterComponent.js';
import Default from './Default.js';

class StatBlock extends CharacterComponent{
    
    constructor(props){
        super(props);

        var id = Default(props.id, '');

        this.state = {id};
    }

    render(){
        return(
            <div className='row border-bottom' style={{flexWrap: 'wrap', paddingBottom: '5px', paddingTop: '5px'}}>
                <div className='row' style={{flexWrap: 'wrap'}}>
                    <div className ='row'>
                        <Stat name='str' style={{width: '100px'}} id={this.state.id}/>
                        <Stat name='dex' style={{width: '100px'}} id={this.state.id}/>
                        <Stat name='con' style={{width: '100px'}} id={this.state.id}/>
                    </div>
                    <div className='row'>
                        <Stat name='int' style={{width: '100px'}} id={this.state.id}/>
                        <Stat name='wis' style={{width: '100px'}} id={this.state.id}/>
                        <Stat name='cha' style={{width: '100px'}} id={this.state.id}/>
                    </div>
                </div>
                <div className='row full-high'>
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    <Stat name='profBonus' displayName='Prof Bonus' id={this.state.id} hideMod={true}/>
                </div>
            </div>
        )
    }
}

export default StatBlock;