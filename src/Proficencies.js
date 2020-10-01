import React from 'react';
import CharacterComponent from './CharacterComponent.js';
import Bubbleable from './Bubbleable.js';
import Default from './Default.js';

const style = {margin: '3px'};

class Proficencies extends CharacterComponent{

    constructor(props){
        super(props);

        this.calcPassive = this.calcPassive.bind(this);
    }

    render(){
        return(
            <div className='prof-table border-all padding-top padding-left' style={{marginTop:'-2px', marginBottom: '0px', marginRight: '-2px'}}>
                    <Bubbleable 
                        id={this.state.id} 
                        name='Acrobatics' 
                        backingStat='dex' 
                        backingVar='acrobatics'
                        style={style}
                    />
                    <Bubbleable 
                        id={this.state.id}
                        name='Animal Handilng'
                        backingStat='wis' 
                        backingVar='animalHandling'
                        style={style}
                    />
                    <Bubbleable 
                        id={this.state.id} 
                        name='Arcana' 
                        backingStat='int' 
                        backingVar='arcana'
                        style={style}
                    />
                    <Bubbleable
                        id={this.state.id}
                        name='Athletics' 
                        backingStat='str'
                        backingVar='atheletics'
                        style={style}
                    />
                    <Bubbleable 
                        id={this.state.id} 
                        name='Deception' 
                        backingStat='cha' 
                        backingVar='deception'
                        style={style}/>
                    <Bubbleable id={this.state.id}
                        name='History'
                        backingStat='int'
                        backingVar='history'
                        style={style}
                    />
                    <Bubbleable 
                        id={this.state.id} 
                        name='Insight' 
                        backingStat='wis' 
                        backingVar='insight'
                        style={style}
                    />
                    <Bubbleable 
                        id={this.state.id} 
                        name='Intimidation'
                        backingStat='cha' 
                        backingVar='intimidation'
                        style={style}
                     />
                    <Bubbleable 
                        id={this.state.id} 
                        name='Investigation' 
                        backingStat='int' 
                        backingVar='investigation'
                        style={style}
                    />
                    <Bubbleable 
                        id={this.state.id}
                        name='Medicine' 
                        backingStat='wis' 
                        backingVar='medicine'
                        style={style}
                     />
                    <Bubbleable
                        id={this.state.id} 
                        name='Nature' 
                        backingStat='int' 
                        backingVar='nature'
                        style={style}
                    />
                    <Bubbleable 
                        id={this.state.id} 
                        name='Perception' 
                        backingStat='wis' 
                        backingVar='perception'
                        style={style}
                    />
                    <Bubbleable 
                        id={this.state.id} 
                        name='Performance' 
                        backingStat='cha' 
                        backingVar='performance'
                        style={style}
                    />
                    <Bubbleable 
                        id={this.state.id} 
                        name='Persuasion' 
                        backingStat='cha' 
                        backingVar='persuasion'
                        style={style}
                    />
                    <Bubbleable 
                        id={this.state.id} 
                        name='Religion' 
                        backingStat='int' 
                        backingVar='religion'
                        style={style}
                    />
                    <Bubbleable 
                        id={this.state.id} 
                        name='Slight of Hand' 
                        backingStat='dex' 
                        backingVar='slightOfHand'
                        style={style}
                    />
                    <Bubbleable 
                        id={this.state.id} 
                        name='Stealth' 
                        backingStat='dex' 
                        backingVar='sealth'
                        style={style}
                    />
                    <Bubbleable 
                        id={this.state.id} 
                        name='Survival' 
                        backingStat='wis'
                        backingVar='survival' 
                        style={style}
                    />
                    &nbsp;
                    <span>
                        Passive Perception: {this.calcPassive()}
                    </span>
                    &nbsp;
            </div>
        )
    }

    calcPassive(){
        var base = 10;
        base += this.characterData.getMod('wis');
        if(this.characterData.state.perception){
            base += parseInt(this.characterData.state.profBonus);
        }
        return base;
    }
}

export default Proficencies;