import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchCharacters } from '../actions/CharactersActions.jsx'
import LinkToCharacters from './LinkToCharacters.jsx';


class CharacterList extends Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
        };
      }
      componentDidMount() {
        this.props.fetchCharacters();
      }
      render() {
        const { error } = this.state;
        const { characters } = this.props;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else {
          return (
            <ul>
              {characters.map(character => (
                <LinkToCharacters character= {character} />
              ))}
            </ul>
          );
        }
      }
}

const mapStateToProps = state => {
  return {
    characters: state.characters
  }
}

export default connect(mapStateToProps, {fetchCharacters})(CharacterList)