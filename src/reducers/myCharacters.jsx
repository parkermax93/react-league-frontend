const initialState = {
    allCharacters: [],
}

export default (state = initialState, action) => {
    switch(action.type) {
        case "SET_ALL_CHARACTERS":
            return {
                ...state,
                allCharacters: action.allCharacters
            }
        default:
            return state
    }
}

export const setAllCharacters = allCharacters => {
    return {
        type: "SET_ALL_CHARACTERS",
        allCharacters
    }
}