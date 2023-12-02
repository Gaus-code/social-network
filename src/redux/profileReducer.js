const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

let initialState = {

    postsData: [
        { id: 1, message: "hello<>", likesCount: 11 },
        { id: 2, message: "whats up????", likesCount: 8 },
        { id: 3, message: "Hello state!!!", likesCount: 8000 },
        { id: 4, message: "Hello bind!WTF!?", likesCount: 80 },
    ],
    newPostText: "You can post anything!",

}

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            };
            debugger;
            state.postsData.push(newPost);
            state.newPostText = '';
            break;
        case UPDATE_POST_TEXT:
            state.newPostText = action.newText;
            break;
        default:
            return state;
    }
}
export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_POST_TEXT, newText: text, });


export default ProfileReducer;