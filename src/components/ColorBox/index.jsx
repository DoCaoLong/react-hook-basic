import React, { useState } from "react";
import "./ColorBox.scss";

ColorBox.propTypes = {};

function getRamdomColor() {
    const COLOR_LIST = ["deeppink", "green", "yellow", "black", "blue"];
    const ramdomIndex = Math.trunc(Math.random() * 5);
    return COLOR_LIST[ramdomIndex];
}
function ColorBox() {
    // dùng callBack để k cho redender
    const callBack = () => {
        const initColor = localStorage.getItem("box_color") || "deeppink";
        return initColor;
    };

    const [color, setColor] = useState(callBack);

    function handleBoxClick() {
        const newColor = getRamdomColor();
        setColor(newColor);
        localStorage.setItem("box_color", newColor);
    }

    return (
        <div
            className="color-box"
            style={{ backgroundColor: color }}
            onClick={handleBoxClick}
        ></div>
    );
}

export default ColorBox;
