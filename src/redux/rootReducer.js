import { combineReducers } from "redux";
import cakeReducer from "./cakes/cakeReducer";
import iceCreamReducer from "./icecream/iceCreamReducer";

const rootReducer = combineReducers({
    cake : cakeReducer,
    icecream : iceCreamReducer
})

export default rootReducer