let rerenderEntireTree = () =>{
    console.log('stated hd changed');
}
let state = {
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
            { id: 2, message: "Hello state!!!", likesCount: 8000 },
        ],
        newPostText: "it-kamasutra.bla-bla",
    }
};
window.state = state;
export const addPost = () =>
{
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0,
    };

    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) =>
{
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer; //паттерн-observer -> почитать; button.addEventListener
}

export default state;