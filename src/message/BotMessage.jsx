export const BotMessage = ({ message }) => {
    return (
        <div className="w-[75%] m-10 relative" id="user">
            <label htmlFor="Bot-message" className="absolute -top-6 -left-5 ">
                Bot
            </label>
            <p
                id="Bot-message"
                className="bg-[#8EACCD] shadow-xl p-2 shadow-gray-700 rounded-b-2xl rounded-tr-2xl"
            >
                {message}
            </p>
        </div>
    );
};
