const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

export let initialState = {

    postsData: [
        { id: 1, message: "hello<>", likesCount: 11 },
        { id: 2, message: "whats up????", likesCount: 8 },
        { id: 3, message: "Hello state!!!", likesCount: 8000 },
        { id: 4, message: "Hello bind!WTF!?", likesCount: 80 },
        { id: 5, message: "hello fucking redux)", likesCount: 180},
    ],
    newPostText: "You can post anything!",

}

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            };
            let stateCopy = {...state};
            stateCopy.postsData = [...state.postsData];
            stateCopy.postsData.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }    
        case UPDATE_POST_TEXT: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }    
        default:
            return state;
    }
}
export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_POST_TEXT, newText: text, });


export default ProfileReducer;