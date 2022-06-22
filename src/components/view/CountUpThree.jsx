import React, { useEffect, useRef, useState } from 'react';

export default function CountUpThree() {
    const [count, setCount] = useState(1);
    const renderCount = useRef(1);
    // const [renderCount, setRenderCount] = useState(1);

    useEffect(() => {
        renderCount.current++;
        console.log(`render count: ${renderCount.current}`);
    });

    return (
        <div>
            <p>Count : {count}</p>
            <button onClick={() => setCount(count + 1)}>Count Up</button>
        </div>
    );
};