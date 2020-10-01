import React from 'react';
import CharacterData from './CharacterData.js';
import Default from './Default.js';

class CharacterComponent extends React.Component{

    characterData;
    id;

    constructor(props){
        super(props);

        var id = Default(props.id, '');
        this.id = id;

        this.state = {id};

        this.characterData = CharacterData.getCharacterByID(id);

        this.characterData.onDeltaState.push(() => this.forceUpdate());
    }

    render(){
        return false;
    }
}

export default CharacterComponent;