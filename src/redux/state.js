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
        if(action.type === 'ADD-POST')
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
        else if(action.type  === 'UPDATE-POST-TEXT')
        {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    },
}

//паттерн-observer -> почитать; button.addEventListener
window.store = store;
export default store;
//store - OOP
//bind????