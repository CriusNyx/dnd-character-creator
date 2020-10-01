import React from 'react';
import CharacterComponent from './CharacterComponent.js';
import ButtonNState from './ButtonNState.js';
import Stat from './Stat.js';
import TextBlobPanel from './TextBlobPanel.js';

class SpellBlock extends CharacterComponent{

    constructor(props){
        super(props);

        this.spellcastingTypeChange = this.spellcastingTypeChange.bind(this);

        this.getSpellBlock = this.getSpellBlock.bind(this);
        this.getNullBlock = this.getNullBlock.bind(this);
        this.getFullBlock = this.getFullBlock.bind(this);
        this.getWarlockBlock = this.getWarlockBlock.bind(this);
        this.getLimitedBlock = this.getLimitedBlock.bind(this);
        this.getFullList = this.getFullList.bind(this);

        this.getHalfList = this.getHalfList.bind(this);
        this.getHalfBlock = this.getHalfBlock.bind(this);
        this.getAttackBlock = this.getAttackBlock.bind(this);
    }

    render(){
        return(
            <div>
                <h4>
                    Spellcasting
                </h4>
                <div className='row'>
                    <p>
                        Spellcasting Type:
                    </p>
                    &nbsp;
                    &nbsp;
                    <ButtonNState options={['half', 'full', 'warlock', 'limited']} stateChange={this.spellcastingTypeChange} value={this.characterData.state.spellcastingType}/>
                </div>
                <p>
                    If your character can cast spells select one of the options above.
                    <br/>
                    Half: Can cast spells with slots up to 5th level.
                    <br/>
                    Full: Can cast spells with slots up to 9th level.
                    <br/>
                    Warlock: All spell slots are the same level.
                    <br/>
                    Limited: Can cast some spells, but not a spell caster.
                </p>
                {this.getSpellBlock()}
            </div>
        )
    }

    spellcastingTypeChange(value){
        this.characterData.setState({spellcastingType: value})
    }

    getSpellBlock(){
        switch(this.characterData.state.spellcastingType){
            case '': return this.getNullBlock();
            case 'half': return this.getHalfBlock();
            case 'full': return this.getFullBlock();
            case 'warlock': return this.getWarlockBlock();
            case 'limited': return this.getLimitedBlock();
        }
    }

    getNullBlock(){
        return(
            <div>
                <h4>
                    Muggle
                </h4>
                <p>
                    It's okay. The websites author can't cast spells either.
                </p>
            </div>
        );
    }

    getHalfBlock(){
        return(
            <div>
                <h4>
                    Standard Half
                </h4>
                <p>
                    Enter your spell slots and spells below
                </p>
                <h4>
                    Spells Slots
                </h4>
                <div className='row' style={{flexWrap: 'wrap'}}>
                    <div className='row'>
                        <Stat id={this.state.id} name='spellSlots1' displayName='1st' hideMod={true} inputStyle={{}}/>
                        <Stat id={this.state.id} name='spellSlots2' displayName='2nd' hideMod={true} inputStyle={{}}/>
                        <Stat id={this.state.id} name='spellSlots3' displayName='3rd' hideMod={true} inputStyle={{}}/>
                        <Stat id={this.state.id} name='spellSlots4' displayName='4th' hideMod={true} inputStyle={{}}/>
                        <Stat id={this.state.id} name='spellSlots5' displayName='5th' hideMod={true} inputStyle={{}}/>
                        
                    </div>
                    &nbsp;
                    &nbsp;
                    {this.getAttackBlock()}
                </div>
                {this.getHalfList()}
            </div>
        )
    }

    getFullBlock(){
        return(
            <div>
                <h4>
                    Standard Full
                </h4>
                <p>
                    Enter your spell slots and spells below
                </p>
                <h4>
                    Spells Slots
                </h4>
                <div className='row' style={{flexWrap: 'wrap'}}>
                    <div className='row'>
                        <Stat id={this.state.id} name='spellSlots1' displayName='1st' hideMod={true} inputStyle={{}}/>
                        <Stat id={this.state.id} name='spellSlots2' displayName='2nd' hideMod={true} inputStyle={{}}/>
                        <Stat id={this.state.id} name='spellSlots3' displayName='3rd' hideMod={true} inputStyle={{}}/>
                        <Stat id={this.state.id} name='spellSlots4' displayName='4th' hideMod={true} inputStyle={{}}/>
                        <Stat id={this.state.id} name='spellSlots5' displayName='5th' hideMod={true} inputStyle={{}}/>
                        <Stat id={this.state.id} name='spellSlots6' displayName='6th' hideMod={true} inputStyle={{}}/>
                        <Stat id={this.state.id} name='spellSlots7' displayName='7th' hideMod={true} inputStyle={{}}/>
                        <Stat id={this.state.id} name='spellSlots8' displayName='8th' hideMod={true} inputStyle={{}}/>
                        <Stat id={this.state.id} name='spellSlots9' displayName='9th' hideMod={true} inputStyle={{}}/>
                    </div>
                    &nbsp;
                    &nbsp;
                    {this.getAttackBlock()}
                </div>
                {this.getFullList()}
            </div>
        )
    }

    getWarlockBlock(){
        return(
            <div>
                <h4>
                    Warlock
                </h4>
                <p>
                    Enter your spell slots and spells below
                </p>
                <h4>
                    Spell Slots
                </h4>
                <div className='row' style={{flexWrap: 'wrap'}}>
                    <span className='row'>
                        <Stat id={this.state.id} name='spellSlotsWarlock' displayName='Slots' hideMod={true}/>
                        &nbsp;
                        &nbsp;
                        <Stat id={this.state.id} name='spellSlotLevel' displayName='Slot Level' hideMod={true}/>
                    </span>
                    &nbsp;
                    &nbsp;
                    {this.getAttackBlock()}
                </div>
                {this.getFullList()}
            </div>
        )
    }

    getAttackBlock(){
        return(
            <span className='row'>
                <Stat id={this.state.id} name='cantripsKnown' displayName='Cantrips Known' hideMod={true} inputStyle={{}}/>
                &nbsp;
                &nbsp;
                <Stat id={this.state.id} name='spellsKnown' displayName='Spells Known' hideMod={true} inputStyle={{}}/>
                &nbsp;
                &nbsp;
                <Stat id={this.state.id} name='spellCastingStat' displayName='Stat' hideMod={true} inputStyle={{width: '50px'}}/>
                &nbsp;
                &nbsp;
                <Stat id={this.state.id} name='spellSaveDC' displayName='Save DC' hideMod={true} inputStyle={{}}/>
                &nbsp;
                &nbsp;
                <Stat id={this.state.id} name='spellCastingModifier' displayName='Attack Modifier' hideMod={true} inputStyle={{}}/>
            </span>
        )
    }

    getLimitedBlock(){
        return(
            <div>
                <h4>
                    Limited
                </h4>
                <p>
                    Enter your spells below
                </p>
                <div className='row'>
                    <Stat id={this.state.id} name='cantripsKnown' displayName='Cantrips Known' hideMod={true} inputStyle={{}}/>
                    &nbsp;
                    &nbsp;
                    <Stat id={this.state.id} name='spellsKnown' displayName='Spells Known' hideMod={true} inputStyle={{}}/>
                </div>
                <TextBlobPanel name='Cantrips and Spells' backingVar = 'limitedSpells' placeholder='Enter your cantrips and spells here' style={{width: '95vw'}}/>
            </div>
        )
    }

    getFullList(){
        return(
            <div className='row' style={{flexWrap: 'wrap'}}>
                <div style={{width: '500px', minWidth: '49vw', maxWidth: '100vw'}}>
                    <TextBlobPanel name='Cantrips' backingVar='cantrips' placeholder='Enter your cantrips here'/>
                    <TextBlobPanel name='Level 1 Spells' backingVar='spells1' placeholder='Enter your spells here'/>
                    <TextBlobPanel name='Level 2 Spells' backingVar='spells2' placeholder='Enter your spells here'/>
                    <TextBlobPanel name='Level 3 Spells' backingVar='spells3' placeholder='Enter your spells here'/>
                    <TextBlobPanel name='Level 4 Spells' backingVar='spells4' placeholder='Enter your spells here'/>
                </div>
                <div style={{width: '500px', minWidth: '49vw', maxWidth: '100vw'}}>
                    <TextBlobPanel name='Level 5 Spells' backingVar='spells5' placeholder='Enter your spells here'/>
                    <TextBlobPanel name='Level 6 Spells' backingVar='spells6' placeholder='Enter your spells here'/>
                    <TextBlobPanel name='Level 7 Spells' backingVar='spells7' placeholder='Enter your spells here'/>
                    <TextBlobPanel name='Level 8 Spells' backingVar='spells8' placeholder='Enter your spells here'/>
                    <TextBlobPanel name='Level 9 Spells' backingVar='spells9' placeholder='Enter your spells here'/>
                </div>
            </div>
        )
    }

    getHalfList(){
        return(
            <div className='row' style={{flexWrap: 'wrap'}}>
                <div style={{width: '500px', minWidth: '49vw', maxWidth: '100vw'}}>
                    <TextBlobPanel name='Cantrips' backingVar='cantrips' placeholder='Enter your cantrips here'/>
                    <TextBlobPanel name='Level 1 Spells' backingVar='spells1' placeholder='Enter your spells here'/>
                    <TextBlobPanel name='Level 2 Spells' backingVar='spells2' placeholder='Enter your spells here'/>
                </div>
                <div style={{width: '500px', minWidth: '49vw', maxWidth: '100vw'}}>
                    <TextBlobPanel name='Level 3 Spells' backingVar='spells3' placeholder='Enter your spells here'/>
                    <TextBlobPanel name='Level 4 Spells' backingVar='spells4' placeholder='Enter your spells here'/>
                    <TextBlobPanel name='Level 5 Spells' backingVar='spells5' placeholder='Enter your spells here'/>
                </div>
            </div>
        )
    }
}

export default SpellBlock;