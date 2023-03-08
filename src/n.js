import { useStateValue } from "./StateProvider";

export const initialState = {
    basket:[]
};

const reducer  = (state,action) =>{
    switch(action.type){
        case "ADD_TO_BASKET":
            return{
                ...state,basket:[...state.basket,action.item]
            };

            default:
                return state;
    }
}


export default reducer;

export const getBasket = (basket)=> basket?.reducer((item,amount)=> item.price + amount,0)


const [state,dispatch] = useStateValue();
const addToBasket = () =>{
    dispatch({
        type:'ADD_TO_BASKET',
        item:{
            id:id,
            name:name
        }
    })
}