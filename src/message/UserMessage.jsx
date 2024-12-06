export const UserMessage = ({message}) => {
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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
                unde, ex ea, excepturi ipsam nostrum porro labore adipisci
                officia repellat placeat! Minima quibusdam temporibus ut,
                delectus consectetur dolore quidem provident.
            </p>
        </div>
    );
};
