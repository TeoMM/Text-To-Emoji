import "../Sass/App.sass";

// React
import React, { useState } from "react";

export default function App() {
    const [text, setText] = useState("");
    const [isCopied, setCopied] = useState(false);

    let final = (text || "")
        .toUpperCase()
        .split("")
        .map((elem: any) => {
            switch (elem) {
                case "A":
                    return "🅰";
                case "B":
                    return "🅱";
                case "C":
                    return "🅲";
                case "D":
                    return "🅳";
                case "E":
                    return "🅴";
                case "F":
                    return "🅵";
                case "G":
                    return "🅶";
                case "H":
                    return "🅷";
                case "I":
                    return "🅸";
                case "J":
                    return "🅹";
                case "K":
                    return "🅺";
                case "L":
                    return "🅻";
                case "M":
                    return "🅼";
                case "N":
                    return "🅽";
                case "O":
                    return "🅽";
                case "P":
                    return "🅿";
                case "Q":
                    return "🆀";
                case "R":
                    return "🆁";
                case "S":
                    return "🆂";
                case "T":
                    return "🆃";
                case "U":
                    return "🆄";
                case "V":
                    return "🆅";
                case "W":
                    return "🆆";
                case "X":
                    return "🆇";
                case "Y":
                    return "🆈";
                case "Z":
                    return "🆉";
                case " ":
                    return "  ";
                case "-":
                    return "➖";
                case "0":
                    return "0️⃣";
                case "1":
                    return "1️⃣";
                case "2":
                    return "2️⃣";
                case "3":
                    return "3️⃣";
                case "4":
                    return "4️⃣";
                case "5":
                    return "5️⃣";
                case "6":
                    return "6️⃣";
                case "7":
                    return "7️⃣";
                case "8":
                    return "8️⃣";
                case "9":
                    return "9️⃣";
                case "?":
                    return "❔";
                case "!":
                    return "❕";
                case ".":
                    return "∙";

                default:
                    return elem;
            }
        })
        .join("")
        .toString();

    return (
        <div className="App">
            <header className="App-header">
                <input
                    style={{ fontSize: 22 }}
                    type="text"
                    onChange={(event) => setText(event.target.value)}
                    placeholder="Input here"
                />
                <span style={{ width: "50%" }} className="newText">
                    {final}
                </span>
                <button
                    style={{ margin: "20px" }}
                    onClick={() => {
                        navigator.clipboard.writeText(final);
                        setCopied(true);
                        setTimeout(() => {
                            setCopied(false);
                        }, 1500);
                    }}
                >
                    Copy!
                </button>
                {isCopied && <p style={{ position: "absolute", top: "100px" }}>Copied!</p>}
            </header>
        </div>
    );
}
