export const initialState = false

export const rootReducer = (state=initialState, action ) => {
    if(action.type === "USER"){
        return action.payload
    }
    return state
}

