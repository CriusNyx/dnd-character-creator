import React from 'react';
import Default from './Default.js';
import WeaponData from './WeaponData.js';
import Stat from './Stat.js';

class CharacterData extends React.Component
{
    static characters = {};

    onDeltaState = [];

    constructor(props){
        super(props);

        var id = Default(props.id, '');

        var name = Default(props.name, '');
        var level = Default(props.level, 1);
        var characterClass = Default(props.characterClass, "");
        var background = Default(props.background, "");
        var playerName = Default(props.playerName, "");
        var faction = Default(props.faction, "");
        var race = Default(props.race, "");
        var alignment = Default(props.alignment, "");
        var exp = Default(props.exp, "");

        var str = Default(props.str, 10);
        var dex = Default(props.dex, 10);
        var con = Default(props.con, 10);
        var int = Default(props.int, 10);
        var wis = Default(props.wis, 10);
        var cha = Default(props.cha, 10);

        var strSave = Default(props.strSave, false);
        var dexSave = Default(props.dexSave, false);
        var conSave = Default(props.conSave, false);
        var intSave = Default(props.intSave, false);
        var wisSave = Default(props.wisSave, false);
        var chaSave = Default(props.chaSave, false);

        var acrobatics = Default(props.acrobatics, false);
        var animalHandilng = Default(props.animalHandilng, false);
        var arcana = Default(props.arcana, false);
        var athletics = Default(props.athletics, false);
        var deception = Default(props.deception, false);
        var history = Default(props.history, false);
        var insight = Default(props.insight, false);
        var intimidation = Default(props.intimidation, false);
        var investigation = Default(props.investigation, false);
        var medicine = Default(props.medicine, false);
        var nature = Default(props.nature, false);
        var perception = Default(props.perception, false);
        var performance = Default(props.performance, false);
        var persuasion = Default(props.persuasion, false);
        var religion = Default(props.religion, false);
        var slightOfHand = Default(props.slightofHand, false);
        var stealth = Default(props.stealth, false);
        var survival = Default(props.survival, false);

        var profBonus = Default(props.profBonus, 0);

        var ac = Default(props.ac, 10);
        var initiative = Default(props.initiative, 0);

        var speed = Default(props.speed, 30);

        var maxHP = Default(props.maxHP, 0);
        var currentHP = Default(props.currentHP, maxHP);

        var hitDice = Default(props.hitDice, '1d1');
        var currentHitDice = Default(props.currentHitDice, hitDice);

        var weapon1 = Default(props.weapon1, new WeaponData());
        var weapon2 = Default(props.weapon1, new WeaponData());
        var weapon3 = Default(props.weapon1, new WeaponData());

        var desc = Default(props.desc, '');
        var inventory = Default(props.inventory, '');
        var classFeatures = Default(props.classFeatures, '');
        var proficenciesAndLanguages = Default(props.proficenciesAndLanguages, '')



        var spellcastingType = Default(props.spellcastingType, '');

        var spellSlots1 = Default(props.spellSlots1, 0);
        var spellSlots2 = Default(props.spellSlots2, 0);
        var spellSlots3 = Default(props.spellSlots3, 0);
        var spellSlots4 = Default(props.spellSlots4, 0);
        var spellSlots5 = Default(props.spellSlots5, 0);
        var spellSlots6 = Default(props.spellSlots6, 0);
        var spellSlots7 = Default(props.spellSlots7, 0);
        var spellSlots8 = Default(props.spellSlots8, 0);
        var spellSlots9 = Default(props.spellSlots9, 0);

        var spellSlotsWarlock = Default(props.spellSlotsWarlock, 0);
        var spellSlotLevel = Default(props.spellSlotLevel, 1);

        var cantripsKnown = Default(props.cantripsKnown, 0);
        var spellsKnown = Default(props.spellsKnown, 0);

        var spellCastingStat = Default(props.spellCastingStat, 'INT');
        var spellCastingModifier = Default(props.spellCastingModifier, '0');
        var spellSaveDC = Default(props.spellSaveDC, '0');

        var cantrips = Default(props.cantrips, '');
        
        var spells1 = Default(props.spells1, '');
        var spells2 = Default(props.spells2, '');
        var spells3 = Default(props.spells3, '');
        var spells4 = Default(props.spells4, '');
        var spells5 = Default(props.spells5, '');
        var spells6 = Default(props.spells6, '');
        var spells7 = Default(props.spells7, '');
        var spells8 = Default(props.spells8, '');
        var spells9 = Default(props.spells9, '');

        var limitedSpells = Default(props.limitedSpells, '')
        
        var revision = 0;

        CharacterData.characters[id] = this;

        this.state = {
            id,
            name, level, characterClass, background, playerName, faction, race, alignment, exp,

            str, dex, con, int, wis, cha, profBonus,
            strSave, dexSave, conSave, intSave, wisSave, chaSave,

            acrobatics, animalHandilng, arcana, athletics, deception, history,
            insight, intimidation, investigation, medicine, nature, perception, performance,
            persuasion, religion, slightOfHand, stealth, survival,

            ac, initiative, speed, 
            maxHP, currentHP,
            hitDice, currentHitDice,
            weapon1, weapon2, weapon3,
            desc, inventory, classFeatures, proficenciesAndLanguages,

            spellcastingType,

            spellSlots1, spellSlots2, spellSlots3, spellSlots4, spellSlots5, spellSlots6, spellSlots7, spellSlots8, spellSlots9,

            spellCastingStat, spellSlotsWarlock, spellSlotLevel, 

            cantripsKnown, spellsKnown,

            spellSaveDC, spellCastingModifier,

            cantrips, spells1, spells2, spells3, spells4, spells5, spells6, spells7, spells8, spells9, 

            limitedSpells,


            revision
        }

        this.getMod = this.getMod.bind(this);
    }






    render(){
        console.log(JSON.stringify(this.state));

        for(var i in this.onDeltaState){
            this.onDeltaState[i]();
        }

        return false;
    }






    static getCharacterByID(id){
        return CharacterData.characters[id];
    }






    getMod(statName){
        if(statName === 'str' || statName === 'dex' || statName === 'con' || statName === 'int' || statName === 'wis' || statName === 'cha')
        {
            return Stat.calcMod(this.state[statName]);
        }
    }





}






export default CharacterData;