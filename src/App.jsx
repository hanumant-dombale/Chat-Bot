import { ScrollArea } from "./components/ui/scroll-area.jsx";
import { UserMessage } from "./message/UserMessage.jsx";
import { BotMessage } from "./message/BotMessage.jsx";
import { PromptArea } from "./message/PromptArea.jsx";
import { useSelector } from "react-redux";
import { Button } from "./components/ui/button.jsx";
import { useEffect, useState } from "react";

function App() {
    const [mode, setMode] = useState("light");
    const chats = useSelector((state) => state.chats);

    useEffect(() => {
        const html = document.querySelector("html");
        html.classList.remove("dark", "light");
        html.classList.add(mode);
    }, [mode]);

    return (
        <div className=" w-full h-screen flex justify-between items-center flex-col p-4 dark:bg-[#040D12] bg-[#D2E0FB] text-md dark:text-white">
            <h1 className="text-3xl font-bold w-full text-center dark:bg-[#183D3D] bg-[#FEF9D9] rounded-xl p-2 h-[60px] relative">
                Chatbot
                <Button
                    className="m-2 absolute top-0 right-0 border rounded-2xl border-black dark:border-white"
                    onClick={() => setMode(mode === "light" ? "dark" : "light")}
                >
                    {" "}
                    {mode}{" "}
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
            </ScrollArea>
            <PromptArea />
        </div>
    );
}

export default App;
