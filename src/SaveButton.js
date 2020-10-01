import React from 'react';
import CharacterComponent from './CharacterComponent.js';
import MainPanel from './MainPanel.js';

const saveText = 'Save';
const waitText = 'Saving, Please Wait';
const successText = 'Success';
const failureText = 'Failed Try Again';

class SaveButton extends CharacterComponent{

    constructor(props){
        super(props);

        this.state['saveButtonText'] = 'Save';
        this.state['resetPending'] = false;

        this.save = this.save.bind(this);
        this.open = this.open.bind(this);
    }

    render(){
        if(this.state.saveButtonText !== saveText && this.state.saveButtonText !== waitText && !this.state.resetPending){
            this.setState({resetPending: true});
            setTimeout(() => {this.setState({resetPending: false, saveButtonText: saveText})}, 5000);
        }

        return(
            <div>
                <button onClick={this.save}>{this.state.saveButtonText}</button>
            </div>
        );
    }
    
    save(){

        this.setState({saveButtonText: waitText});

        var id = this.characterData.state.id;
        var characterName = this.characterData.state.name;
        var playerName = this.characterData.state.playerName;

        var sheet = JSON.stringify(this.characterData.state);

        var req = 'http://' + window.location.hostname + ':3001/api/updateCharacter';


        fetch(req, 
            {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: id,
                name: characterName,
                playerName: playerName
            })
            }
        );
  
        var req2 = 'http://' + window.location.hostname + ':3001/api/saveCharacter';
        
        // axios.post(req2,
        // {
        //     id: id,
        //     sheet: sheet
        // }).then((responce) => {
        //     if(responce.data.success){
        //         this.setState({saveButtonText: successText});
        //     }
        //     else{
        //         this.setState({saveButtonText: failureText});
        //         console.log(JSON.stringify(responce));
        //     }
        // });
    }

    open(){
        MainPanel.openMode();
    }

}

export default SaveButton;