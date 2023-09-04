import { combineReducers } from "redux";
import kontakReducer from "./kontak";
import loginReducer from "./login"
import formReducer from "./form";

export default combineReducers({
    kontakReducer,
    loginReducer,
    formReducer

})
