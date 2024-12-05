import { twMerge } from "tailwind-merge";

const Weather = () => {
    return (
        <main className={twMerge("h-screen", "flex", "bg-gray-300")}>
            {/* Left side */}
            <section
                className={twMerge(
                    "flex-1 md:max-w-96",
                    "bg-gray-100/50 backdrop-blur-lg"
                )}
            ></section>
            {/* Right side */}
            <section className={twMerge("flex-1")}></section>
        </main>
    );
};

export default Weather;
