import React from 'react';
import CharacterData from './CharacterData.js';
import CharacterComponent from './CharacterComponent.js';
import Default from './Default.js';

class CharacterHeader extends CharacterComponent{

    characterData;

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className='border-bottom'>
                <input
                    className='stat-box' 
                    style={{width: '300px', textAlign: 'center', fontSize: 'larger', fontWeight: 'bold'}}
                    type='text' 
                    value={this.characterData.state.name}
                    placeholder='Character Name'
                    onChange={(x) => this.update('name', x)}
                />
                <p>
                    Level: 
                    &nbsp;
                    <input 
                        className='stat-box'
                        type='text' 
                        value={this.characterData.state.level}
                        placeholder='1'
                        onChange={(x) => this.update('level', x)}
                    />
                    <input
                        className='stat-box' 
                        style={{width: '100px'}}
                        type='text' 
                        value={this.characterData.state.characterClass}
                        placeholder='Adventurer'
                        onChange={(x) => this.update('characterClass', x)}
                    />
                    &nbsp;
                    
                    Background:
                    &nbsp;
                    <input
                        className='stat-box'
                        style={{width: '100px'}}
                        type='text'
                        value={this.characterData.state.background}
                        placeholder='Nobody'
                        onChange={(x) => this.update('background', x)}
                    />

                    Player Name:
                    &nbsp;
                    <input
                        className='stat-box'
                        style={{width: '100px'}}
                        type='text'
                        value={this.characterData.state.playerName}
                        placeholder='Player 1'
                        onChange={(x) => this.update('playerName', x)}
                    />
                </p>
                <p>
                    Faction:
                    &nbsp;
                    <input
                        className='stat-box'
                        style={{width: '100px'}}
                        type='text'
                        value={this.characterData.state.faction}
                        placeholder='None'
                        onChange={(x) => this.update('faction', x)}
                    />

                    Race:
                    &nbsp;
                    <input
                        className='stat-box'
                        style={{width: '100px'}}
                        type='text'
                        value={this.characterData.state.race}
                        placeholder='Human'
                        onChange={(x) => this.update('race', x)}
                    />

                    Alignment:
                    &nbsp;
                    <input
                        className='stat-box'
                        style={{width: '120px'}}
                        type='text'
                        value={this.characterData.state.alignment}
                        placeholder='True Neutral'
                        onChange={(x) => this.update('alignment', x)}
                    />

                    Exp:
                    &nbsp;
                    <input
                        className='stat-box'
                        style={{width: '120px'}}
                        type='text'
                        value={this.characterData.state.exp}
                        placeholder='0'
                        onChange={(x) => this.update('exp', x)}
                    />
                </p>
            </div>
        )
    }

    update(ident, event){
        var deltaState = {}
        deltaState[ident] = event.target.value;

        this.characterData.setState(deltaState);
    }
}

export default CharacterHeader;