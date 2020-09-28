import React, { Component } from 'react';

const URL = 'localhost:3001/characters'

const getCharacters = () => {
this.state.characters.map((character) => <li>{character.name}</li>)
}


class CharacterListContainer extends Component {
    state = {
		characters: [],
    }

    render() {

        return (
            <div className="character-list">
                <ul>
                    {getCharacters()}
                </ul> 
            </div>
        )

    }
    componentDidMount() {
        fetch(`${URL}`)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    characters: json.results
                })
                debugger
            })
    }
}
export default CharacterListContainer