import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainPanel from './MainPanel.js';
import CharacterData from './CharacterData.js';

const characterData = new CharacterData({});

class App extends Component {

  constructor(props){
    super(props);

    this.state = {id: '', characters: []};

    this.buttonClick = this.buttonClick.bind(this);
    this.postButton = this.postButton.bind(this);
    this.getCharacters = this.getCharacters.bind(this);
  }

  render() {

    // alert(window.location.hostname);

    return (
      <div className="App">
        <div className="App-header">
          <CharacterData/>
          <MainPanel/>
          <div style={{height: '100px'}}/>
        </div>
      </div>
    );
  }

  buttonClick(){
    var req = 'http://' + window.location.hostname + ':3001/api/newCharacter';

    fetch(req)
      .then((data) => data.json())
      .then((res) => { if(res['success']) { this.setState({id: res['id']}); }});
  }

  postButton(){
    var req = 'http://' + window.location.hostname + ':3001/api/updateCharacter';

    fetch(req, 
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: this.state.id,
          name: 'Foo 2',
          playerName: 'RJ'
        })
      }
    );

    var req2 = 'http://' + window.location.hostname + ':3001/api/saveCharacter';
    fetch(req2,
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: this.state.id,
          sheet: 'This is a character sheet'
        })
      });
  }

  getCharacters(){
    var req = 'http://' + window.location.hostname + ':3001/api/getCharacters';

    fetch(req)
      .then((data) => data.json())
      .then((res) => { if(res['success']) { this.setState({ characters: res['data']}); }});
  }
}

export default App;
