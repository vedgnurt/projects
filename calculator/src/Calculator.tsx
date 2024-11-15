import { twMerge } from "tailwind-merge";
import { FaDeleteLeft, FaDivide } from "react-icons/fa6";

const Calculator = () => {
    return (
        <div
            className={twMerge(
                "w-[90%] max-w-[364px] p-4",
                "border border-gray-600 rounded-2xl",
                "shadow-md"
            )}
        >
            {/* Header */}
            <header
                className={twMerge(
                    "p-4",
                    "flex flex-col items-end justify-end",
                    "min-h-36",
                    "border border-gray-500 rounded-2xl"
                )}
            >
                {/* Calculation */}
                <p className="text-lg text-gray-500 font-medium">130 x 5</p>
                {/* Result */}
                <p className="text-2xl text-gray-900 font-bold">650</p>
            </header>
            {/* Buttons */}
            <div className={twMerge("pt-4", "grid grid-cols-4 gap-4")}>
                <button
                    className={twMerge(
                        "aspect-square",
                        "flex items-center justify-center",
                        "bg-gray-900 hover:bg-gray-950 text-gray-50",
                        "rounded-xl",
                        "font-medium"
                    )}
                >
                    C
                </button>
                <button
                    className={twMerge(
                        "aspect-square",
                        "flex items-center justify-center",
                        "bg-gray-900 hover:bg-gray-950 text-gray-50",
                        "rounded-xl",
                        "font-medium"
                    )}
                >
                    %
                </button>
                <button
                    className={twMerge(
                        "aspect-square",
                        "flex items-center justify-center",
                        "bg-gray-900 hover:bg-gray-950 text-gray-50",
                        "rounded-xl",
                        "font-medium"
                    )}
                >
                    <FaDeleteLeft />
                </button>
                <button
                    className={twMerge(
                        "aspect-square",
                        "flex items-center justify-center",
                        "bg-gray-900 hover:bg-gray-950 text-gray-50",
                        "rounded-xl",
                        "font-medium"
                    )}
                >
                    <FaDivide />
                </button>
                <button
                    className={twMerge(
                        "aspect-square",
                        "flex items-center justify-center",
                        "hover:bg-gray-950/30 text-gray-950",
                        "rounded-xl",
                        "font-medium"
                    )}
                >
                    7
                </button>
                <button
                    className={twMerge(
                        "aspect-square",
                        "flex items-center justify-center",
                        "hover:bg-gray-950/30 text-gray-950",
                        "rounded-xl",
                        "font-medium"
                    )}
                >
                    8
                </button>
                <button
                    className={twMerge(
                        "aspect-square",
                        "flex items-center justify-center",
                        "hover:bg-gray-950/30 text-gray-950",
                        "rounded-xl",
                        "font-medium"
                    )}
                >
                    9
                </button>
                <button
                    className={twMerge(
                        "aspect-square",
                        "flex items-center justify-center",
                        "bg-gray-900 hover:bg-gray-950 text-gray-50",
                        "rounded-xl",
                        "font-medium"
                    )}
                >
                    X
                </button>
                <button
                    className={twMerge(
                        "aspect-square",
                        "flex items-center justify-center",
                        "hover:bg-gray-950/30 text-gray-950",
                        "rounded-xl",
                        "font-medium"
                    )}
                >
                    4
                </button>
                <button
                    className={twMerge(
                        "aspect-square",
                        "flex items-center justify-center",
                        "hover:bg-gray-950/30 text-gray-950",
                        "rounded-xl",
                        "font-medium"
                    )}
                >
                    5
                </button>
                <button
                    className={twMerge(
                        "aspect-square",
                        "flex items-center justify-center",
                        "hover:bg-gray-950/30 text-gray-950",
                        "rounded-xl",
                        "font-medium"
                    )}
                >
                    6
                </button>
                <button
                    className={twMerge(
                        "aspect-square",
                        "flex items-center justify-center",
                        "bg-gray-900 hover:bg-gray-950 text-gray-50",
                        "rounded-xl",
                        "font-medium"
                    )}
                >
                    -
                </button>
                <button
                    className={twMerge(
                        "aspect-square",
                        "flex items-center justify-center",
                        "hover:bg-gray-950/30 text-gray-950",
                        "rounded-xl",
                        "font-medium"
                    )}
                >
                    1
                </button>
                <button
                    className={twMerge(
                        "aspect-square",
                        "flex items-center justify-center",
                        "hover:bg-gray-950/30 text-gray-950",
                        "rounded-xl",
                        "font-medium"
                    )}
                >
                    2
                </button>
                <button
                    className={twMerge(
                        "aspect-square",
                        "flex items-center justify-center",
                        "hover:bg-gray-950/30 text-gray-950",
                        "rounded-xl",
                        "font-medium"
                    )}
                >
                    3
                </button>
                <button
                    className={twMerge(
                        "aspect-square",
                        "flex items-center justify-center",
                        "bg-gray-900 hover:bg-gray-950 text-gray-50",
                        "rounded-xl",
                        "font-medium"
                    )}
                >
                    +
                </button>
                <button
                    className={twMerge(
                        "aspect-square",
                        "flex items-center justify-center",
                        "hover:bg-gray-950/30 text-gray-950",
                        "rounded-xl",
                        "font-medium"
                    )}
                >
                    00
                </button>
                <button
                    className={twMerge(
                        "aspect-square",
                        "flex items-center justify-center",
                        "hover:bg-gray-950/30 text-gray-950",
                        "rounded-xl",
                        "font-medium"
                    )}
                >
                    0
                </button>
                <button
                    className={twMerge(
                        "aspect-square",
                        "flex items-center justify-center",
                        "hover:bg-gray-950/30 text-gray-950",
                        "rounded-xl",
                        "font-medium"
                    )}
                >
                    .
                </button>
                <button
                    className={twMerge(
                        "aspect-square",
                        "flex items-center justify-center",
                        "bg-gray-900 hover:bg-gray-950 text-gray-50",
                        "rounded-xl",
                        "font-medium"
                    )}
                >
                    =
                </button>
            </div>
        </div>
    );
};

export default Calculator;
