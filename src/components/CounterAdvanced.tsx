import { useState } from "react";
import CounterButton from "./CounterButton";


type CounterState = {
    count: number;
    lastAction: string;
    time: string;
}

const CounterAdvanded = () => {

const getCurrentTime = () => new Date().toLocaleTimeString();

const [state, setState] = useState <CounterState> ({
    count:0,
    lastAction:"",
    time: "",
});

const increaseCount = () => {
    setState({
        count: state.count + 1,
        lastAction: "Increase",
        time: getCurrentTime(),
    })
}

const decreaseCount = () => {
    if(state.count > 0) {
      setState({
        count: state.count -1,
        lastAction: "decrease",
        time: getCurrentTime(),  
      })
    }
}

const resetCount = () => {
    setState({
         count: state.count + 1,
        lastAction: "Reset",
        time: getCurrentTime(),
    })
}

 return (
        <>
        <div className="space-y-4 text-2xl pt-12">
            <h1 className="text-center space-x-4">Count is {state.count}</h1>
            <div className="space-y-4 text-2xl pt-12">
            <CounterButton onClick={increaseCount} label="increase"/>
            <CounterButton onClick={decreaseCount} disabled={state.count === 0} label="decrease"/>
            <CounterButton onClick={resetCount} disabled={state.count === 0} label="reset"
            addClass="bg-cf-dark-red"
            />
        </div>
    </div>
    <p>Last change: <strong>{state.lastAction || "-"}</strong> at<strong>{state.time || "-"}</strong></p>
        
        </>
    )
}

export default CounterAdvanded;