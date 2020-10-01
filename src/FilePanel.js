import React from 'react';
import MainPanel from './MainPanel.js';
import LoadButton from './LoadButton.js';
import ping from 'web-pingjs'

class FilePanel extends React.Component{
    constructor(props){
        super(props);

        this.state = {serverStatus: 'pending'};

        this.open = this.open.bind(this);
        this.findServer = this.findServer.bind(this);
        this.onServerFound = this.onServerFound.bind(this);
        this.onServerNotFound = this.onServerNotFound.bind(this);
        
        this.pendingHTML = this.pendingHTML.bind(this);
        this.characterToHTML = this.characterToHTML.bind(this);
        this.serverFoundHTML = this.serverFoundHTML.bind(this);
        this.serverNotFoundHTML = this.serverNotFoundHTML.bind(this);
        this.noServerHTML = this.noServerHTML.bind(this);

        this.loadCharacter = this.loadCharacter.bind(this);
        this.newCharacter = this.newCharacter.bind(this);
    }

    render(){
        switch(this.state.serverStatus){
            case 'pending':
                this.findServer();
                return this.pendingHTML();
            case 'success':
                return this.serverFoundHTML();
            case 'failure':
                return this.serverNotFoundHTML();
            case 'noServer':
                return this.noServerHTML();
        }
        return null;
    }

    // This method 
    open(){
        fetch('http://' + window.location.hostname + ':3001/api/getCharacters').then((data) => data.json()).then((res) => this.setState({data: res.data}));
    }

    // ---------- Server Status Methods ----------

    findServer(){
        fetch(window.location.hostname + ':3001').then(this.onServerFound).catch(this.onServerNotFound);
    }

    onServerFound(data){
        console.log(JSON.stringify(data));
        this.setState({serverStatus: 'success'});
    }

    onServerNotFound(err){
        console.log(JSON.stringify(err));
        this.setState({serverStatus: 'failure'});
    }

    // ---------- Rendering Methods ----------

    pendingHTML(){
        return <h1>Trying to reach server.</h1>
    }

    serverFoundHTML(){
        return <h1>Server Reached</h1>
    }

    serverNotFoundHTML(){
        return (
            <> 
                <h1>Server could not be found</h1>
                <button onClick={(x) => {this.setState({serverStatus: 'noServer'})}}>Continue with no server</button>
            </>
        )
    }

    noServerHTML(){
        return (
            <>
                <h1>No server Mode</h1> 
                <button onClick={(x) => this.newCharacter()}>New Character</button>
            </>
        )
    }

    collectionsToHTML(x, y){
        return(
            <p>
                {x}
            </p>
        )
    }

    characterToHTML(x, y){
        return (
            <LoadButton id={x._id} text = {x.playerName + ': ' + x.name}/>
        )
    }

    // ---------- Character Management Methods ----------
    loadCharacter(id){
        MainPanel.loadCharacter(id);
    }    

    newCharacter(){
        MainPanel.newCharacter();
    }
}

export default FilePanel;