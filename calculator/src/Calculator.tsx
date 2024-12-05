import { twMerge } from "tailwind-merge";
import { FaDeleteLeft, FaDivide } from "react-icons/fa6";
import { useCallback, useEffect, useState } from "react";

type Calculation = "operation" | "number" | "delete";

const Calculator = () => {
    const [calculation, setCalculation] = useState("");
    const [result, setResult] = useState("");
    const [calculationResult, setCalculatorResult] = useState("");

    const clearCalculate = useCallback(() => {
        setCalculation("");
        setCalculatorResult("");
        setResult("");
    }, []);

    const updateCalculation = useCallback(
        (symbol: string, type: Calculation, result: string) => {
            if (type === "number") {
                if (result.length > 0) setResult("");
                setCalculation((prev) => prev + symbol);
            }

            if (type === "operation") {
                if (
                    calculation.length === 0 &&
                    result &&
                    !isNaN(Number(result))
                ) {
                    setCalculation(result + symbol);
                    setResult("");
                } else {
                    setCalculation((prev) => {
                        if (
                            !isNaN(Number(prev[prev.length - 1])) ||
                            prev[prev.length - 1] === "%"
                        ) {
                            return prev + symbol;
                        } else {
                            return prev
                                ? prev.slice(0, -1) + symbol
                                : "0" + symbol;
                        }
                    });
                }
            }

            if (type === "delete") {
                setCalculation((prev) => prev.slice(0, -1));
            }
        },
        [calculation]
    );

    const calculateResult = useCallback((calculation: string) => {
        if (!calculation) return;

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

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            const key = e.key;

            switch (key) {
                case "0":
                    updateCalculation("0", "number", result);
                    break;
                case "1":
                    updateCalculation("1", "number", result);
                    break;
                case "2":
                    updateCalculation("2", "number", result);
                    break;
                case "3":
                    updateCalculation("3", "number", result);
                    break;
                case "4":
                    updateCalculation("4", "number", result);
                    break;
                case "5":
                    updateCalculation("5", "number", result);
                    break;
                case "6":
                    updateCalculation("6", "number", result);
                    break;
                case "7":
                    updateCalculation("7", "number", result);
                    break;
                case "8":
                    updateCalculation("8", "number", result);
                    break;
                case "9":
                    updateCalculation("9", "number", result);
                    break;
                case "%":
                    updateCalculation("%", "number", result);
                    break;
                case ".":
                    updateCalculation(".", "number", result);
                    break;
                case "Backspace":
                    updateCalculation("delete", "delete", result);
                    break;
                case "+":
                    updateCalculation("+", "operation", result);
                    break;
                case "-":
                    updateCalculation("-", "operation", result);
                    break;
                case "*":
                    updateCalculation("*", "operation", result);
                    break;
                case "/":
                    updateCalculation("/", "operation", result);
                    break;
                case "Enter":
                    calculateResult(calculation);
                    break;
                case "=":
                    calculateResult(calculation);
                    break;
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [result, calculation, updateCalculation, calculateResult]);

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
                    onClick={() => updateCalculation("%", "number", result)}
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
                    onClick={() =>
                        updateCalculation("delete", "delete", result)
                    }
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
                    onClick={() => updateCalculation("/", "operation", result)}
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
                    onClick={() => updateCalculation("7", "number", result)}
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
                    onClick={() => updateCalculation("8", "number", result)}
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
                    onClick={() => updateCalculation("9", "number", result)}
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
                    onClick={() => updateCalculation("*", "operation", result)}
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
                    onClick={() => updateCalculation("4", "number", result)}
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
                    onClick={() => updateCalculation("5", "number", result)}
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
                    onClick={() => updateCalculation("6", "number", result)}
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
                    onClick={() => updateCalculation("-", "operation", result)}
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
                    onClick={() => updateCalculation("1", "number", result)}
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
                    onClick={() => updateCalculation("2", "number", result)}
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
                    onClick={() => updateCalculation("3", "number", result)}
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
                    onClick={() => updateCalculation("+", "operation", result)}
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
                    onClick={() => updateCalculation("00", "number", result)}
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
                    onClick={() => updateCalculation("0", "number", result)}
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
                    onClick={() => updateCalculation(".", "number", result)}
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
