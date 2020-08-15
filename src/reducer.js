const InitialState = {
    cart: [],
    user: null
}
const GetCartTotal = cart =>(
    cart?.reduce((amount, item)=>item.price + amount, 0)
)
const Reducer = (state, action) => {
    console.log(action)
    switch(action.type){
        case 'ADD_TO_CART':
          return {
              ...state, 
              cart: [...state.cart, action.item]
          }
        case 'REMOVE_FROM_CART':
            let newCart = [...state.cart];
            const index = newCart.findIndex((cartItem)=>(
                cartItem.id == action.id
            ))
            if (index >= 0){
                newCart.splice(index, 1)
            } else{
                console.warn(
                    `Product (id: ${action.id}) is not in the cart.`
                )
            }
            return {...state, cart: newCart};
        case "CLEAR_CART":
            return {state}
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        default:
            return state;
    }
}
export {InitialState, GetCartTotal, Reducer};