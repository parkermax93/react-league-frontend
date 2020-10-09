const gotCharacters = (characters) => {
    console.log("in action")
    return { type: "GOT_CHARACTERS", payload: characters };
}

export const fetchCharacters = () => {
    return(dispatch) => {
        // debugger
        dispatch({type: "FETCHING_CHARACTERS"})
        fetch("http://localhost:3001/characters")
        .then((res) => res.json())
        .then((json)=> {
                dispatch(gotCharacters(json))
        })
    }
}

export const createCharacters = (character) => {
    return(dispatch) => {
        const configObj ={
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(character)
        };
        fetch("http://localhost:3001/characters", configObj)
        .then((res) => res.json())
        .then((newCharacter) => {
            debugger
            dispatch(addCharacter(newCharacter))});
    }
}

const addCharacter = (character) => ({type: "ADDED_CHARACTER", payload: character})