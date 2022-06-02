
const AppReducer = (state,action) => {
    switch(action.type)
    {
        
        case 'ADD_Product':
            return{
                ...state, product :[action.payload, ...state.product]
            } ;   
        default:
            return state; 
             
    }
}

export default AppReducer