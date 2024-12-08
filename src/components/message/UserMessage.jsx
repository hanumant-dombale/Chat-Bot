const UserMessage = ({ message }) => {
    return (
        <div className="w-[75%] m-10 lg:ml-[23%] ml-[19%] relative" id="user">
            <label htmlFor="user-message" className="absolute -top-6 -right-5 ">
                User
            </label>
            <p
                id="user-message"
                className="bg-[#808b96] shadow-xl p-2 shadow-gray-700 rounded-b-2xl rounded-tl-2xl"
            >
                {message}
            </p>
        </div>
    );
};

export default UserMessage;
