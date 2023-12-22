import React, { useState, useEffect } from 'react'

const ColorGenerator = () => {
    const [typeOfColor, setTypeOfColor] = useState("hex");
    const [color, setColor] = useState('#ffffff')
    // for hex code
    const hexArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    const getRandomHex = () => {
        let hexCode = '#'
        for (let i = 0; i < 6; i++) {
            hexCode += hexArray[Math.floor(Math.random() * 15)]
        }
        setColor(hexCode);
    }

    const getRandomRgb = () => {
        let r = Math.floor(Math.random() * 256)
        let g = Math.floor(Math.random() * 256)
        let b = Math.floor(Math.random() * 256)
        let rgbCode = `rgb(${r},${g},${b})`
        setTypeOfColor('rgb')
        setColor(rgbCode)
    }

    useEffect(() => {
        if (typeOfColor === "rgb") getRandomRgb();
        else getRandomHex();
    }, [typeOfColor]);

    return (
        <div className="wrapper" style={{ backgroundColor: color }}>
            <div className="generate-color flex flex-col justify-center gap-4">
                <h1 className='text-xl font-bold'>{typeOfColor === 'rgb'? "RGB Color": "HEX Color"}</h1>
                <h3 className='text-xl'>{color}</h3>
                <button className='random-hex bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => { getRandomHex() }}>Generate Random HEX Color</button>
                <button className='random-rgb bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => { getRandomRgb() }}>Generate Random RGB Color</button>
            </div>
        </div>
    )
}

export default ColorGenerator