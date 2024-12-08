const UserMessage = ({ message }) => {
    return (
        <div className="w-fit m-10 place-self-end relative" id="user">
            <label htmlFor="user-message" className="absolute -top-6 -right-5 ">
                User
            </label>
            <p
                id="user-message"
                className="bg-[#808b96] dark:bg-[#629584] shadow-lg p-2 shadow-gray-700 rounded-b-2xl rounded-tl-2xl"
            >
                {message}
            </p>
        </div>
    );
};

export default UserMessage;
