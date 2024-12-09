import { useState } from "react";

const Counter = () => {
    const [counter,setCounter] = useState(0);
    const increase = () =>{
        setCounter(counter+1);
    };
    return (
        <div className="counter">
            <h1>Counter: {counter}</h1>
            <button className="btn-count" onClick={increase}>Increase</button>
        </div>
    );
}


export default Counter;