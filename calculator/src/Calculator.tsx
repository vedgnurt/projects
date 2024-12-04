import { twMerge } from "tailwind-merge";
import { FaDeleteLeft, FaDivide } from "react-icons/fa6";
import { useCallback, useState } from "react";

const Calculator = () => {
    const [calculation, setCalculation] = useState("");
    const [result, setResult] = useState("");
    const [calculationResult, setCalculatorResult] = useState("");

    const clearCalculate = useCallback(() => {
        setCalculation("");
        setCalculatorResult("");
        setResult("");
    }, []);

    const addCalculation = useCallback(
        (text: string) => {
            const prevRs =
                result.length > 0 && !isNaN(Number(result)) && text !== "delete"
                    ? result
                    : "";

            if (
                result.length > 0 &&
                !isNaN(Number(result)) &&
                text !== "delete"
            ) {
                setResult("");
            }

            setCalculation((prev) => {
                switch (text) {
                    case "delete":
                        return prev.slice(0, -1);
                    case "division":
                        return prevRs.length > 0
                            ? prevRs + "/"
                            : prev
                            ? prev[-1] === "/"
                                ? prev
                                : prev.slice(0, -1) + "/"
                            : "0" + "/";
                    case "multiplication":
                        return prevRs.length > 0
                            ? prevRs + "*"
                            : prev
                            ? prev[-1] === "*"
                                ? prev
                                : prev.slice(0, -1) + "*"
                            : "0" + "*";
                    case "subtraction":
                        return prevRs.length > 0
                            ? prevRs + "-"
                            : prev
                            ? prev[-1] === "-"
                                ? prev
                                : prev.slice(0, -1) + "-"
                            : "0" + "-";
                    case "addition":
                        return prevRs.length > 0
                            ? prevRs + "+"
                            : prev
                            ? prev[-1] === "+"
                                ? prev
                                : prev.slice(0, -1) + "+"
                            : "0" + "+";
                    default:
                        return prev + text;
                }
            });
        },
        [result]
    );

    const calculateResult = useCallback((calculation: string) => {
        try {
            const expression = calculation.replace(/%/g, "/100");

            const sanitizedCalculation = expression.replace(
                /[^0-9+\-*/.()]/g,
                ""
            );

            const result = eval(sanitizedCalculation);
            setResult(result.toString());
            setCalculatorResult(calculation);
            setCalculation("");
        } catch {
            setCalculation("NaN");
        }
    }, []);

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
                <p className="text-lg text-gray-500 font-medium">
                    {calculationResult}
                </p>
                {/* Result */}
                <p className="text-2xl text-gray-900 font-bold min-h-8 tracking-wider">
                    {result ? result : calculation}
                </p>
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
                    onClick={clearCalculate}
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
                    onClick={() => addCalculation("%")}
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
                    onClick={() => addCalculation("delete")}
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
                    onClick={() => addCalculation("division")}
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
                    onClick={() => addCalculation("7")}
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
                    onClick={() => addCalculation("8")}
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
                    onClick={() => addCalculation("9")}
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
                    onClick={() => addCalculation("multiplication")}
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
                    onClick={() => addCalculation("4")}
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
                    onClick={() => addCalculation("5")}
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
                    onClick={() => addCalculation("6")}
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
                    onClick={() => addCalculation("subtraction")}
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
                    onClick={() => addCalculation("1")}
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
                    onClick={() => addCalculation("2")}
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
                    onClick={() => addCalculation("3")}
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
                    onClick={() => addCalculation("addition")}
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
                    onClick={() => addCalculation("00")}
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
                    onClick={() => addCalculation("0")}
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
                    onClick={() => addCalculation(".")}
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
                    onClick={() => calculateResult(calculation)}
                >
                    =
                </button>
            </div>
        </div>
    );
};

export default Calculator;
