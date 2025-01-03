import { ScrollArea, ScrollBar } from "./components/ui/scroll-area.jsx";
import {
    PromptArea,
    UserMessage,
    BotMessage,
} from "./components/message/index.js";
import { useSelector } from "react-redux";
import { Button } from "./components/ui/button.jsx";
import { useEffect, useRef, useState } from "react";

function App() {
    const [mode, setMode] = useState("dark");
    const [showMode, setShowMode] = useState("Dark Mode");
    const chats = useSelector((state) => state.chats);
    const messageEnd = useRef(null);

    const handleOnClick = () => {
        const html = document.querySelector("html");
        html.classList.remove("dark", "light");
        html.classList.add(mode);
        setMode(mode === "light" ? "dark" : "light");
        setShowMode(mode === "light" ? "Dark Mode" : "Light Mode");
    };

    useEffect(() => {
        messageEnd.current?.scrollIntoView();
    }, [chats]);

    return (
        <div className="font-sans w-full h-screen flex justify-between items-center flex-col p-4 dark:bg-[#040D12] bg-[#D2E0FB] text-md dark:text-white">
            <div className="flex items-center justify-between w-full bg-[#FEF9D9] dark:bg-[#183D3D] rounded-xl">
                <h1 className="text-3xl font-bold w-full p-3 h-[60px]">
                    Chatbot
                </h1>
                <Button
                    className="m-2 rounded-2xl  hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black border-black dark:border-white shadow-md"
                    onClick={handleOnClick}
                >
                    {showMode}
                </Button>
            </div>
            <ScrollArea className=" w-full h-full">
                {chats.map((chat) => (
                    <div
                        ref={messageEnd}
                        key={chat.id}
                        className="w-full bg-transparent flex flex-col"
                    >
                        <UserMessage message={chat.question} />
                        <BotMessage message={chat.answer} />
                    </div>
                ))}
                <ScrollBar className="bg-slate-400 rounded-full" />
            </ScrollArea>
            <PromptArea />
        </div>
    );
}

export default App;
