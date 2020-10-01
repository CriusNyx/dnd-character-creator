import React from 'react';
import CharacterComponent from './CharacterComponent.js';
import Default from './Default';
import radioOn from './radio-on.svg';
import radioOff from './radio-off.svg';
import ButtonNState from './ButtonNState.js';

const buttonColor = '#202020';
const buttonColorPressed = 'white'

class WeaponBlock extends CharacterComponent{

    constructor(props){
        super(props);

        this.state['ident'] = Default(props.ident, 'weapon1');
        this.state['inputStyle'] = Default(props.inputStyle, {});

        this.onChange = this.onChange.bind(this);
        this.getWeapon = this.getWeapon.bind(this);
        this.onClickStatButton = this.onClickStatButton.bind(this);
        this.getButtonStyle = this.getButtonStyle.bind(this);
        this.getButton = this.getButton.bind(this);
        this.toggle = this.toggle.bind(this);
    }
















    render(){
        var weapon = this.characterData.state[this.state.ident];

        return(
            <div className='row' style={{flexWrap: 'wrap'}}>
                <div>
                    {this.getButton()}
                    &nbsp;
                    <input type='p'
                        name={'name'}
                        onChange={this.onChange}
                        value={weapon.name}
                        style={{width: '180px'}}
                        className='stat-box'
                        />
                    {/* <div className='weapon-stat-button' style={{padding: 0, backgroundColor: buttonColor, display: 'inline-flex', border: '3px solid white'}}>
                        <button
                            className='weapon-stat-button' 
                            style={this.getButtonStyle('str')}
                            onClick={() => this.onClickStatButton('str')}
                            >
                            str
                        </button>
                        <button 
                            className='weapon-stat-button'
                            style={this.getButtonStyle('dex')}
                            onClick={() => this.onClickStatButton('dex')}
                            >
                            dex
                        </button>
                    </div> */}
                    <ButtonNState option1='str' option2='dex' stateChange={this.onClickStatButton} value={weapon.backingStat}/>
                </div>

                <div>
                    &nbsp;
                    &nbsp;
                    <div style={{width: '40px', overflow: 'hidden', display: 'inline-flex'}}>
                        {this.wrapMod(weapon.calcMod(this.characterData))}
                    </div>
                    <span>
                        To Hit
                    </span>
                    &nbsp;
                    &nbsp;
                    <input type='p'
                        name={'damage'}
                        onChange={this.onChange}
                        value={weapon.damage}
                        style={{width: '80px', textAlign: 'right'}}
                        className='stat-box'
                    />
                    &nbsp;
                    <div style={{width: '40px', overflow: 'hidden', display: 'inline-flex', textAlign: 'left'}}>
                        {this.wrapMod(weapon.calcDamageMod(this.characterData))}
                    </div>
                    &nbsp;
                    <input type='p'
                        name={'damageType'}
                        onChange={this.onChange}
                        value={weapon.damageType}
                        style={{width: '100px', textAlign: 'right'}}
                        className='stat-box'
                    />
                    &nbsp;
                    <span>
                        damage
                    </span>
                </div>
            </div>
        )
    }
















    onChange(event){
        var weapon = this.getWeapon();

        var field = event.target.name;

        weapon[field] = event.target.value;

        //special case for setting the weapon name for magic and misc damage
        if(field == 'name'){
            //match magic bonus

            var match = /(?!\()([\+|\-]\s*[\.|\d|\s]+)(?!\))/.exec(event.target.value);
            if(match != null){
                var mod = match[1];
                mod = mod.replace(' ', '');
                var magicBonus = parseInt(mod);
                
                weapon.magicBonus=magicBonus;
            }
            else{
                weapon.magicBonus=0;
            }

            //match misc bonus
            var match2 = /(?:\()(\s*[\+|\-]\s*[\.|\d|\s]+)(?:\))/.exec(event.target.value);

            if(match2 != null){
                var mod = match2[1];
                mod = mod.replace(' ', '');
                var miscBonus = parseInt(mod);

                weapon.miscBonus=miscBonus;
            }
            else{
                weapon.miscBonus=0;
            }
        }

        var deltaState = {};
        deltaState[this.state.ident] = weapon;

        this.characterData.setState(deltaState);
    }






    wrapMod(mod){
        if(mod >= 0){
            return '+' + mod;
        }
        else{
            return mod;
        }
    }






    getWeapon(){
        return this.characterData.state[this.state.ident];
    }






    onClickStatButton(value){
        var weapon = this.getWeapon();
        weapon.backingStat = value;

        var deltaState = {};
        deltaState[this.state.ident] = weapon;

        this.characterData.setState(deltaState);
    }






    getButtonStyle(buttonName){
        if(this.getWeapon().backingStat == buttonName){
            return {backgroundColor: buttonColorPressed, color: buttonColor}
        }
        else{
            return {backgroundColor: buttonColor, color: buttonColorPressed}
        }
    }






    getButton(){
        if(this.getWeapon().proficient){
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
                    style={{width: '0.7em', height: '0.7em'}}
                    onClick={this.toggle}
                />
            )
        }
    }






    toggle(){
        var weapon = this.getWeapon();
        weapon.proficient = !weapon.proficient;

        var deltaState = {};
        deltaState[this.state.ident] = weapon;

        this.characterData.setState(deltaState);
    }
}











export default WeaponBlock;