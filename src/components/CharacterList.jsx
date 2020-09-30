import React, { Component } from 'react';
import { Link } from "react-router-dom";

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
              this.setState({
                isLoaded: true,
                characters: result.data
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
      render() {
        const { error, characters } = this.state;
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
export default CharacterList