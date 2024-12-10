import { useState } from "react";
import { Button } from "../ui/button.jsx";
import { Input } from "../ui/input.jsx";
import { useDispatch } from "react-redux";
import { addUserMessage, addBotMessage } from "@/store/store.js";
import { Answer } from "./index.js";

const PromptArea = () => {
    const [question, setQuestion] = useState("");
    const dispatch = useDispatch();

    const sumbitHandler = async (e) => {
        e.preventDefault();
        let answer = "Loading....";
        dispatch(addUserMessage({ question, answer }));
        setQuestion("");
        answer = await Answer(question);
        dispatch(addBotMessage(answer));
    };

    return (
        <div className="h-15 w-full p-5 dark:bg-[#183D3D] bg-[#FEF9D9]  rounded-xl">
            <form onSubmit={sumbitHandler} className="flex">
                <Input
                    type="text"
                    value={question}
                    placeholder="Meassage...."
                    onChange={(e) => setQuestion(e.target.value)}
                    className="border-y border-l rounded-l-2xl placeholder:text-slate-600 dark:border-white dark:placeholder:text-white"
                />
                <Button
                    type="submit"
                    className="border-y border-r rounded-r-2xl border-black dark:border-white dark:text-white"
                >
                    Send
                </Button>
            </form>
        </div>
    );
};

export default PromptArea;
