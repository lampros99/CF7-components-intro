import CounterButton from "./CounterButton";
// import { useCounter } from "../hooks/useCounter";
import { useCounterWithReducer } from "../hooks/useCounterWithReducer";

const CounterWithReducer = () => {

    const {count, lastAction, time, increase, reset} = useCounterWithReducer();
    
    function decrease(): void {
        throw new Error("Function not implemented.");
    }

    return (
        <>
         <div className="space-y-4 text-2xl pt-12">
            <h1 className="text-center  space-x-4">Count is {count}</h1>
        <div className="text-center space-y-4 text-2xl pt-12">
            <CounterButton onClick={increase} label="increase"/>
            <CounterButton onClick={decrease} disabled={count === 0} label="decrease"/>
            <CounterButton onClick={reset} disabled={count === 0} label="reset"
            addClass="bg-cf-dark-red"
            />
        </div>
    </div>
     <p>Last change: <strong>{lastAction || "-"}</strong> at<strong>{time || "-"}</strong></p>
        
        </>
    )
}

export default CounterWithReducer;