import axios from "axios";
export const generateAnswer = async (question) => {
    const URL =
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?";
    const API_KEY = "AIzaSyBZa0NtU3QLy6ZFhVNxyzcc-fwjWLY-sYA";

    const answer = await axios({
        url: `${URL}key=${API_KEY}`,
        method: "POST",
        data: {
            contents: [{ parts: [{ text: question }] }],
        },
    });
    return answer["data"]["candidates"][0]["content"]["parts"][0]["text"];
};
