let state = {
    dialogsPage: {
        dialogsData: [
            { id: 1, name: 'Dimych' },
            { id: 2, name: 'Adrey' },
            { id: 3, name: 'Sveta' },
            { id: 4, name: 'Sasha' },
            { id: 5, name: 'Victor' },
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
        posts: [
            { id: 1, message: "hello<>", likesCount: 11 },
            { id: 2, message: "whats up????", likesCount: 8 },
        ]
    }
};

export default state;