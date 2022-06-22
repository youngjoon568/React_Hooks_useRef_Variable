import React, { useRef, useState } from 'react'

export default function CountUpTwo() {
    const [renderer, setRenderer] = useState(0);

    const countRef = useRef(0);
    let countVar = 0;
    
    const handleRendering = () => {
        setRenderer(renderer + 1);
    };

    const handleRef = () => {
        countRef.current++;
        console.log(`ref: ${countRef.current}`);
    };

    const handleVar = () => {
        countVar++;
        console.log(`var : ${countVar}`);
    };

    const handlePrint = () => {
        console.log(`ref : ${countRef.current}, var: ${countVar}`);
    };

    return (
        <div>
            <p>Ref : {countRef.current}</p>
            <p>Var : {countVar}</p>
            <button onClick={handleRendering}>Rendering</button>
            <button onClick={handleRef}>Ref Up</button>
            <button onClick={handleVar}>Var Up</button>
            <button onClick={handlePrint}>print</button>
        </div>
    );
};