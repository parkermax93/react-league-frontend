import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { setAllCharacters } from '../reducers/myCharacters.jsx'

const URL = 'http://localhost:3001/characters'

class CharacterList extends Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          characters: []
        };
      }
      componentDidMount() {
        fetch(URL)
          .then(res => res.json())
          .then(
            (result) => {
              this.props.setAllCharacters(
                result.data
              );
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
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
                <li key={character.id}>
                    <Link to= {`/characters/${character.id}`}>
                        {character.attributes.name}
                    </Link>
                </li>
              ))}
            </ul>
          );
        }
      }
}

const mapStateToProps = state => {
  return {
    characters: state.allCharacters
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setAllCharacters:(characters) => dispatch(setAllCharacters(characters))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CharacterList)