import React, { Component } from 'react';
import { withRouter } from "react-router";

class CharacterCard extends Component {

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
      render() {
            const { error, character } = this.state;
            if (error) {
              return <div>Error: {error.message}</div>;
            } else if (this.state.character){
              return (
                <div>
                    <img src={character.attributes.image_url} alt={character.attributes.name}></img>
                    <h3>
                        {character.attributes.name}
                    </h3>
                    <h4>
                        {character.attributes.lane.name}
                    </h4>
                    <p>
                        {character.attributes.description}
                    </p>
                </div>
              );
            } else {
                return (
                    <div>
                    </div>
                  );
            }
          }
    }
export default withRouter(CharacterCard)