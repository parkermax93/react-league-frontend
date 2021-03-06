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
          // characters: [] does not do anything in my current itteration of code 
        };
      }
      componentDidMount() {
        this.props.fetchCharacters();
        // fetch(URL)
        //   .then(res => res.json())
        //   .then(
        //     (result) => {
        //       this.props.setAllCharacters(
        //         result.data
        //       );
        //     },
        //     (error) => {
        //       this.setState({
        //         isLoaded: true,
        //         error
        //       });
        //     }
        //   )
      }
      render() {
        const { error } = this.state;
@@ -42,35 +26,17 @@ class CharacterList extends Component {
            <ul>
              {characters.map(character => (
                <LinkToCharacters character= {character} />
                // <li key={character.id}>
                //     <Link to= {`/characters/${character.id}`}>
                //         {character.attributes.name}
                //     </Link>
                // </li>
              ))}
            </ul>
          );
        }
        // return (
        //   <div>

        //   </div>
        // )
      }
}

const mapStateToProps = state => {
  // console.log(state)
  return {
    // characters: state.allCharacters
    characters: state.characters
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     setAllCharacters:(characters) => dispatch(setAllCharacters(characters))
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(CharacterList)
export default connect(mapStateToProps, {fetchCharacters})(CharacterList) 
