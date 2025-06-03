import  { useState } from "react";
import CounterButton from "./CounterButton";


const CounterWithMoreState = () => {
    const [count, setCount] = useState(0);
    const [lastAction, setLastAction] = useState("");
    const [time, setTime] = useState("")

    const getCurrentTime = () => new Date().toLocaleTimeString();

    const increaseCount = () => {
        setCount(count + 1)
        setLastAction("Increase");
        setTime(getCurrentTime());
    }

    const decreaseCount = () => {
        if(count > 0) {
        setCount(count - 1);
        setLastAction("Decrease");
        setTime(getCurrentTime());
        }
        
  }

    const resetCount = () => {
        setCount(0)
        setLastAction("Reset");
        setTime(getCurrentTime());
    }

    return (
        <>
        <div className="space-y-4 text-2xl pt-12">
            <h1 className="text-center space-x-4">Count is {count}</h1>
            <div className="space-y-4 text-2xl pt-12">
            <CounterButton onClick={increaseCount} label="increase"/>
            <CounterButton onClick={decreaseCount} disabled={count === 0} label="decrease"/>
            <CounterButton onClick={resetCount} disabled={count === 0} label="reset"
            addClass="bg-cf-dark-red"
            />
        </div>
    </div>
    <p>Last change: <strong>{lastAction} at {time}</strong></p>
        
        </>
    )
}

export default CounterWithMoreState;