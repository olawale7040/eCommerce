
const Initial_State ={
    currentUser:null,
}

const userReducer = (state=Initial_State, action) =>{
    if(action.type === 'SET_CURRENT_USER'){
        return{
            ...state,
            currentUser:action.payload
        }
    }
    else{
        return state
    }
}

export default userReducer;