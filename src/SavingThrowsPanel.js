import React from 'react';
import CharacterComponent from './CharacterComponent.js';
import CharacterData from './CharacterData.js';
import Default from './Default';
import Bubbleable from './Bubbleable.js';

class SavingThrowsPanel extends CharacterComponent{

    constructor(props){
        super(props);


    }

    render(){
        return(
            <div className='border-bottom'>
                <p>
                    Saving Throws:
                </p>
                <div className='row full-wide' style={{flexWrap: 'wrap'}}>
                    <div className='row'>
                        <Bubbleable id={this.state.id} style={{width: '150px', textAlign: 'left'}} name='Strength' backingStat='str' backingVar='strSave' hideBackingStat={true}/>
                        <span style={{width: '10px'}}/>
                        <Bubbleable id={this.state.id} style={{width: '150px', textAlign: 'left'}} name='Dexterity' backingStat='dex' backingVar='dexSave'hideBackingStat={true}/>
                    </div>
                    <span style={{width: '10px'}}/>
                    <div className='row'>
                        <Bubbleable id={this.state.id} style={{width: '150px', textAlign: 'left'}} name='Constitution' backingStat='con' backingVar='conSave' hideBackingStat={true}/>
                        <span style={{width: '10px'}}/>
                        <Bubbleable id={this.state.id} style={{width: '150px', textAlign: 'left'}} name='Intelligence' backingStat='int' backingVar='intSave' hideBackingStat={true}/>
                    </div>
                    <span style={{width: '10px'}}/>
                    <div className='row'>
                        <Bubbleable id={this.state.id} style={{width: '150px', textAlign: 'left'}} name='Wisdom' backingStat='wis' backingVar='wisSave' hideBackingStat={true}/>
                        <span style={{width: '10px'}}/>
                        <Bubbleable id={this.state.id} style={{width: '150px', textAlign: 'left'}} name='Charisma' backingStat='cha' backingVar='chaSave' hideBackingStat={true}/>
                    </div>
                    <span style={{width: '10px'}}/>
                </div>
            </div>
        )
    }
}

export default SavingThrowsPanel;