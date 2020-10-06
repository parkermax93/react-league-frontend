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