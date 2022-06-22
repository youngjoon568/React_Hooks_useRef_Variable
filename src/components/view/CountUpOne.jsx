import React, { useRef, useState } from 'react';

export default function CountUpOne() {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);

    console.log("렌더링");

    const handleStateCount = () => {
        setCount(count + 1);
    };

    // countRef 가 아무리 증가해도 렌더링하지 않음
    const handleRefCount = () => {
        countRef.current = countRef.current + 1;
    };

    return (
        <div>
            <p>State: {count}</p>
            <p>Ref : {countRef.current}</p>
            <button onClick={handleStateCount}>State Up</button>
            <button onClick={handleRefCount}>Ref Up</button>
        </div>
    );
};