import React from 'react';
import CharacterData from './CharacterData.js';
import CharacterHeader from './CharacterHeader.js';
import StatBlock from './StatBlock.js';
import SavingThrowsPanel from './SavingThrowsPanel.js';
import Proficencies from './Proficencies.js';
import CombatPanel from './CombatPanel.js';
import TextBlobPanel from './TextBlobPanel.js';
import SpellBlock from './SpellBlock.js';
import SaveButton from './SaveButton.js';

class Character extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <CharacterHeader/>
                <StatBlock/>
                <SavingThrowsPanel/>

                <div className='row' style={{flexWrap: 'wrap'}}>
                    <Proficencies/>
                    <CombatPanel/>
                </div>
                <div className='row border-top' style={{marginTop: '-2px', flexWrap: 'wrap'}}>
                    <div className='column outline' style={{width: '500px', minWidth: '50%', maxWidth: '100%'}}>
                    <TextBlobPanel 
                        name='Character Description' 
                        backingVar='desc' 
                        placeholder='Enter your Character Description Here'
                        style={{width: '100%'}}
                        />
                    <TextBlobPanel 
                        name='Inventory' 
                        backingVar='inventory' 
                        placeholder='Enter your inventory here'
                        style={{width: '100%'}}
                    />
                    </div>
                    <div className='column outline' style={{width: '500px', minWidth: '50%', maxWidth: '100%'}}>
                    <TextBlobPanel 
                        name='Class Features and Traits' 
                        backingVar='classFeatures' 
                        placeholder='Enter your Class Features and Traits here'
                        style={{width: '100%'}}
                    />
                    <TextBlobPanel
                        name='Proficencies And Languages' 
                        backingVar='proficenciesAndLanguages' 
                        placeholder='Enter your Other Proficencies and Languages here'
                        style={{width: '100%'}}
                    />
                    </div>
                    <SpellBlock/>

                </div>
                <SaveButton/>
            </div>
        )
    }
}

export default Character;