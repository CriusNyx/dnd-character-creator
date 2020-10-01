
import React from 'react';
import Default from'./Default.js';
import Stat from './Stat.js';

class WeaponData {

    constructor(props = {}){
        this.name = Default(props.name, 'no weapon');
        this.backingStat = Default(props.backingStat, '');
        this.proficient = Default(props.proficient, false);
        this.magicBonus = Default(props.magicBonus, 0);
        this.miscBonus = Default(props.miscBonus, 0);

        this.damage = Default(props.damage, '1d1');
        this.damageMod = Default(props.damageBonus, 0);
        this.damageType = Default(props.damageType, 'null');

        this.calcMod = this.calcMod.bind(this);
        this.calcDamageMod = this.calcDamageMod.bind(this);
    }

    calcMod(characterData){
        var output = 0;
        if(this.backingStat === 'str' || this.backingStat === 'dex'){
            var score = characterData.state[this.backingStat];
            output += Stat.calcMod(score);
        }
        if(this.proficient){
            output += parseInt(characterData.state.profBonus);
        }
        output += this.magicBonus;
        output += this.miscBonus;

        return output;
    }

    calcDamageMod(characterData){
        var output = 0;

        if(this.backingStat === 'str' || this.backingStat === 'dex'){
            var score = characterData.state[this.backingStat];
            output += Stat.calcMod(score);
        }

        output += this.magicBonus;

        return output
    }
}

export default WeaponData;