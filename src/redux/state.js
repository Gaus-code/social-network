const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

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
        }
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
        if(action.type === ADD_POST)
        {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            };
    
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }
        else if(action.type  === UPDATE_POST_TEXT)
        {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
        else if(action.type === UPDATE_NEW_MESSAGE_BODY)
        {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        }
        else if(action.type === SEND_MESSAGE)
        {
            let body =  this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messagesData.push({ id: 6, message: body });
            this._callSubscriber(this._state);
        }
    },
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_POST_TEXT, newText: text,})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})
export const sendMessageCreator = () => ({type: SEND_MESSAGE})


//паттерн-observer -> почитать; button.addEventListener
window.store = store;
export default store;
//store - OOP
//bind????