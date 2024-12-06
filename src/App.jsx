import { ScrollArea } from "./components/ui/scroll-area.jsx";
import { UserMessage } from "./message/UserMessage.jsx";
import { BotMessage } from "./message/BotMessage.jsx";
import { PromptArea } from "./message/PromptArea.jsx";
function App() {
    return (
        <div className=" w-full h-screen flex justify-between items-center flex-col p-4 bg-black text-white text-md">
            <h1 className="text-3xl font-bold w-full text-center bg-slate-900 rounded-xl p-2 h-[60px]">
                Chatbot
            </h1>
            <ScrollArea className=" w-full h-full border border-white">
                <div className="w-full bg-transparent flex flex-col">
                    <UserMessage message="Hello" />
                    <BotMessage />
                </div>
            </ScrollArea>
            <PromptArea />
        </div>
    );
}

export default App;
