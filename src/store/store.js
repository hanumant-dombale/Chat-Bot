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
        addChat: (state, action) => {
            const chat = {
                id: nanoid(),
                question: action.payload.question,
                answer: action.payload.answer,
            };
            state.chats.push(chat);
        },
    },
});

export const store = configureStore({
    reducer: chatSlice.reducer,
});

export const { addChat } = chatSlice.actions;
