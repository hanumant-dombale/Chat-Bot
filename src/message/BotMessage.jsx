export const BotMessage = ({message}) => {
    return (
        <div className="w-[75%] m-10 relative" id="user">
            <label htmlFor="Bot-message" className="absolute -top-6 -left-5 ">
                Bot
            </label>
            <p
                id="Bot-message"
                className="bg-[#414445] shadow-xl p-2 shadow-gray-700 rounded-b-2xl rounded-tr-2xl"
            >
                {message}
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tempora at odit delectus aspernatur ipsa incidunt eveniet
                adipisci? Quos, sunt aliquid. Inventore non tenetur minus
                explicabo odit corporis dolorem fuga quis? Mollitia architecto,
                vero labore adipisci molestiae obcaecati aliquam maxime. Tempore
                quia, minus ad cum hic provident eos quisquam atque magni,
                pariatur consequuntur delectus earum obcaecati accusantium! Sit
                autem corrupti ut!
            </p>
        </div>
    );
};
