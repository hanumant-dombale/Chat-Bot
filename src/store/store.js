import { configureStore, createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    chats: [
        {
            id: nanoid(),
            question: "Hii",
            answer: "Hi there! How can I help you today?",
        },
    ],
};

export const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        addUserMessage: (state, action) => {
            let chatId = nanoid();
            const chat = {
                id: chatId,
                question: action.payload.question,
                answer: action.payload.answer,
            };
            state.chats.push(chat);
        },
        addBotMessage: (state, action) => {
            let chatId = state.chats[state.chats.length - 1].id;

            state.chats.find((chat) => chat.id === chatId).answer =
                action.payload;
        },
    },
});

export const store = configureStore({
    reducer: chatSlice.reducer,
});

export const { addUserMessage, addBotMessage } = chatSlice.actions;
