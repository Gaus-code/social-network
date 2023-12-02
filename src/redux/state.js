import DialogsReducer from "./dialogsReducer";
import ProfileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

let store = 
{
    _state: 
    {
        dialogsPage: {
            dialogsData: [
                { id: 1, name: 'Dimych', message: 'hi' },
                { id: 2, name: 'Adrey', message: 'hello' },
                { id: 3, name: 'Sveta', message: 'how r u' },
                { id: 4, name: 'Sasha', message: 'aloha' },
                { id: 5, name: 'Victor', message: 'fuck off!!!!' },
            ],
            messagesData: [
                { id: 1, message: 'hi' },
                { id: 2, message: 'hello' },
                { id: 3, message: 'how r u' },
                { id: 4, message: 'aloha' },
                { id: 5, message: 'fuck off!!!!' },
            ],
            newMessageBody: "",
        },
        profilePage: {
            postsData: [
                { id: 1, message: "hello<>", likesCount: 11 },
                { id: 2, message: "whats up????", likesCount: 8 },
                { id: 3, message: "Hello state!!!", likesCount: 8000 },
                { id: 4, message: "Hello bind!WTF!?", likesCount: 80},
            ],
            newPostText: "You can post anything!",
        },
        sidebar: {},
    },
    _callSubscriber()
    {
        console.log('state changed');
    },
    getState()
    {
        return this._state;
    },
    subscribe(observer)
    {
        this._callSubscriber = observer; 
    },
    dispatch(action)
    {
        this.getState.profilePage = ProfileReducer(this._state.profilePage, action);
        this.getState.dialogsPage = DialogsReducer(this._state.dialogsPage, action);
        this.getState.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    },
}

//паттерн-observer -> почитать; button.addEventListener
window.store = store;
export default store;
//store - OOP
//bind????