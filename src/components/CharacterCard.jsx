import React, { Component } from 'react';
import { withRouter } from "react-router";

class CharacterCard extends Component {
      render() {
            const { error, character } = this.props;
            if (error) {
              return <div>Error: {error.message}</div>;
            } else if (this.props.character){
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