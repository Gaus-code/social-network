import {combineReducers, legacy_createStore as createStore} from "redux";
import ProfileReducer from "./profileReducer";
import DialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";


let reducers = combineReducers({
    profileReducer: ProfileReducer,
    dialogsReducer: DialogsReducer,
    sidebarReducer: sidebarReducer,
});

let store = createStore(reducers);


// console.log(store.getState())

export default store;