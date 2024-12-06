import { useState } from "react";
import { generateAnswer } from "./generateAnswer.js";
import { Button } from "../components/ui/button.jsx";
import { Input } from "../components/ui/input.jsx";

export const PromptArea = () => {
    const [question, setQuestion] = useState("");

    const sumbitHandler = async (e) => {
        e.preventDefault();
        console.log(question);
        const answer = await generateAnswer(question);
        console.log(answer);
        setQuestion("");
    };

    return (
        <div className="h-15 w-full p-5 bg-slate-900 rounded-xl">
            <form onSubmit={sumbitHandler} className="flex">
                <Input
                    type="text"
                    value={question}
                    placeholder="Meassage...."
                    onChange={(e) => setQuestion(e.target.value)}
                    className="border-y border-l rounded-l-2xl placeholder:text-slate-600"
                />
                <Button
                    type="submit"
                    className="border-y border-r rounded-r-2xl"
                >
                    Send
                </Button>
            </form>
        </div>
    );
};
