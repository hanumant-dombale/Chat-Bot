import { useState } from "react";
import { generateAnswer } from "./generateAnswer.js";
import { Button } from "../components/ui/button.jsx";
import { Input } from "../components/ui/input.jsx";
import { useDispatch } from "react-redux";
import { addChat } from "@/store/store.js";

export const PromptArea = () => {
    const [question, setQuestion] = useState("");
    const dispatch = useDispatch();

    const sumbitHandler = async (e) => {
        e.preventDefault();
        const answer = await generateAnswer(question);
        dispatch(addChat({ question, answer }));
        setQuestion("");
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
