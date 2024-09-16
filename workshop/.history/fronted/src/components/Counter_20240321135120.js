Counter.js

import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    function incrementCount(){
        setCount(count+1)
    }

    function deccrementCount(){
        setCount(count-1)
    }
    return ( 
        <>
            <button onClick={incrementCount}>+</button>
            {count}
            <button onClick={deccrementCount}>-</button>
        </>
     );
}
 
export default Counter;