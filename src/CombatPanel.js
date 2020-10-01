import React from 'react';
import Default from './Default.js';
import CharacterData from './CharacterData.js';
import CharacterComponent from './CharacterComponent.js';
import Stat from './Stat.js';
import WeaponBlock from './WeaponBlock.js';

const numStyle={width: '50px'}
const hitDiceStyle={width: '100px'}

class CombatPanel extends CharacterComponent
{
    constructor(props){
        super(props);

        this.resetHitDice = this.resetHitDice.bind(this);
    }

    render(){
        return (
            <div className='combat-panel border-top border-left border-right border-bottom' style={{marginTop: '-2px', marginBottom: '0px', paddingLeft: '3px', paddingRight: '3px'}}>
                <h4 className='full-wide'>
                    Combat Stats
                </h4>
                <div className='row border-top'>
                    <Stat id={this.state.id} name="ac" hideMod={true} inputStyle={numStyle}/>
                    <Stat id={this.state.id} name="initiative" displayName='INIT' hideMod={true} inputStyle={numStyle}/>
                    <Stat id={this.state.id} name='speed' hideMod={true} inputStyle={numStyle}/>
                </div>
                <div className='row border-top'>
                    <Stat id={this.state.id} name='maxHP' displayName='Max HP' hideMod={true} inputStyle={numStyle}/>
                    <Stat id={this.state.id} name='currentHP' displayName='HP' hideMod={true} inputStyle={numStyle}/>
                </div>
                <div className='row border-top'>
                    <Stat id={this.state.id} name='hitDice' displayName='Hit Dice' hideMod={true} inputStyle={hitDiceStyle}/>
                    <Stat id={this.state.id} name='currentHitDice' displayName='Current Hit Dice' hideMod={true} inputStyle={hitDiceStyle}/>
                    <button onClick={this.resetHitDice} className='reset-button'>reset</button>
                </div>
                <div className='column border-top full-wide'>
                    <h4>
                    Weapons
                    </h4>

                    &nbsp;
                    <WeaponBlock ident='weapon1'/>
                    &nbsp;
                    <WeaponBlock ident='weapon2'/>
                    &nbsp;
                    <WeaponBlock ident='weapon3'/>
                </div>

                <div style={{height: '10px'}}/>

                <div className="tooltip">
                    Help With Weapons
                    <span className="tooltiptext">
                        <div style={{marginLeft: '3px', marginRight: '3px'}}>
                            <p>
                                Here you can enter you weapon info, including the weapons name, stat, damage die, damage type, and proficency.
                            </p>
                            <p>
                                The modifiers for the weapon will be calculated automatically
                            </p>
                            <p>
                                You can enter magic damage for your weapon by adding a +n to the end of the weapon name, such as Longbow + 1
                            </p>
                            <p>
                                You can also enter additional to hit modifier by adding a (+n)
                            </p>
                            <p>
                                For example a "Longbow + 2 (+ 2)" has an extra + 2 magic damage, and an additional + 2 on hit.
                            </p>
                        </div>
                    </span>
                </div> 
            </div>

        )
    }

    resetHitDice(){
        this.characterData.setState({currentHitDice: this.characterData.state.hitDice});
    }
}

export default CombatPanel;