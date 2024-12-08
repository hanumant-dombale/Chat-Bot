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
    const [mode, setMode] = useState("light");
    const [showMode, setShowMode] = useState("dark");
    const chats = useSelector((state) => state.chats);
    const messageEnd = useRef(null);

    const handleOnClick = () => {
        const html = document.querySelector("html");
        html.classList.remove("dark", "light");
        html.classList.add(mode);
        setMode(mode === "light" ? "dark" : "light");
        setShowMode(mode === "light" ? "dark" : "light");
    };

    useEffect(() => {
        messageEnd.current?.scrollIntoView();
    }, [chats]);

    return (
        <div className=" w-full h-screen flex justify-between items-center flex-col p-4 dark:bg-[#040D12] bg-[#D2E0FB] text-md dark:text-white">
            <h1 className="text-3xl font-bold w-full text-center dark:bg-[#183D3D] bg-[#FEF9D9] rounded-xl p-2 h-[60px] relative">
                Chatbot
                <Button
                    className="m-2 absolute top-0 right-0 border rounded-2xl hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black border-black dark:border-white"
                    onClick={handleOnClick}
                >
                    {showMode}
                </Button>
            </h1>
            <ScrollArea className=" w-full h-full">
                {chats.map((chat) => (
                    <div
                        key={chat.id}
                        className="w-full bg-transparent flex flex-col"
                    >
                        <UserMessage message={chat.question} />
                        <BotMessage message={chat.answer} />
                    </div>
                ))}
                <div ref={messageEnd} />
                <ScrollBar className="bg-slate-400 rounded-full" />
            </ScrollArea>
            <PromptArea />
        </div>
    );
}

export default App;
