export const initialState = null

export const rootReducer = (state, action ) => {
    if(action.type === "USER"){
        return action.payload
    }
    return state
}

