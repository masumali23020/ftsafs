const initilaStalte  = {
    cartData:[],
}

const cartReducer = (state, action)=> {
    switch (action.type) {
        case "Add_to_Cart":
            return {
                cartData: [...state.cartData, action.payload]
            }
            
            break;
        case "Remove_Form_Cart":

        return {
            ...state,
            cartData: state.cartData.filter(item => item.id !== action.payload.id)
        }
            
            break;
    
        default:
            return state
    }

}

export { cartReducer, initilaStalte };

