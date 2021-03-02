const gotCharacters = (characters) => {
    console.log("in action")
    return { type: "GOT_CHARACTERS", payload: characters };
}

export const fetchCharacters = () => {
    return(dispatch) => {
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
        console.log("c")
        fetch("http://localhost:3001/characters", configObj) 
        // number of p rq
        .then((res) => res.json())
        .then((newCharacter) => {
            console.log("d")
            dispatch(addCharacter(newCharacter))});
    }
}
