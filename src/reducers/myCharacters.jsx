// const initialState = {
//     allCharacters: [],
// }

// export default (state = initialState, action) => {
//     switch(action.type) {
//         case "SET_ALL_CHARACTERS":
//             return {
//                 ...state,
//                 // allCharacters: action.allCharacters
//                 allCharacters: action.payload
//             }
//         default:
//             return state
//     }
// }

// export const setAllCharacters = allCharacters => {
//     return {
//         type: "SET_ALL_CHARACTERS",
//         allCharacters
//     }
// }
export default function characterReducer(
    state = { characters: [], loading: false }, action) {
        switch(action.type) {
            case "GOT_CHARACTERS":
                return { loading: false, characters: action.payload.data }
            case "FETCHING_CHARACTERS":
                return {...state, loading: true}
            case "ADDED_CHARACTER":
                return {...state, characters: [...state.characters, action.payload.data]}
            default:
                return state;
        }
    }