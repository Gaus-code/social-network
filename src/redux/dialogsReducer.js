const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
}
const DialogsReducer = (state=initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messagesData.push({ id: 6, message: body });
            return state;
        default:
            return state;
    }
}

export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });
export const sendMessageCreator = () => ({ type: SEND_MESSAGE });

export default DialogsReducer;