import React, { Component }  from 'react';
import CharacterCard from '../CharacterCard.jsx';
import CharactersLink from '../CharactersLink.jsx'

class ShowCharacter extends Component {
    constructor(props) {
        super(props);

        this.state = {
          error: null,
          isLoaded: false,
          character: null,
        };
      }

      componentDidMount() {
          const id = this.props.match.params.id;
          const url = `http://localhost:3001/characters/${id}`
        fetch(url)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                character: result.data
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }
    render(){
        return(
            <div className="App">
                <header className="App-header">
                    <CharacterCard character= {this.state.character}/>
                    <CharactersLink />
                </header>
            </div>
        )
    }
}
export default ShowCharacter