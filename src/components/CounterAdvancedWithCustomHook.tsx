import CounterButton from "./CounterButton";
import { useCounter } from "../hooks/useCounter";
// import {useAdvancedCounter} from "../hooks/useAdvancedCounter";

const CounterAdvancedWithCustomHook = () => {

    const { count, increase, decrease, reset } = useCounter();
    
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
     {/* <p>Last change: <strong>{state.lastAction || "-"}</strong> at<strong>{state.time || "-"}</strong></p> */}
        
        </>
    )
}

export default CounterAdvancedWithCustomHook;