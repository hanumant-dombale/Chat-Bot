const BotMessage = ({ message }) => {
    return (
        <div className="w-fit m-10 relative" id="user">
            <label htmlFor="Bot-message" className="absolute -top-6 -left-5 ">
                Bot
            </label>
            <p
                id="Bot-message"
                className="bg-[#8EACCD] dark:bg-[#387478] shadow-lg p-2 shadow-gray-700 rounded-b-2xl rounded-tr-2xl"
            >
                <pre className="whitespace-pre-wrap"><p>{message}</p></pre>
            </p>
        </div>
    );
};

export default BotMessage;
