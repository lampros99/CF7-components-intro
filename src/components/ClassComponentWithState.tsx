/* eslint-disable @typescript-eslint/no-empty-object-type */
import { Component } from "react";

type State = {
    count: number;
}

class ClassComponentWithState extends Component<{}, State> {
    constructor(props: {}) {
        super(props)
        this.state = {
            count: 0,
        };
    }

    incease = () => {
        this.setState({count: this.state.count + 1})
    }
    reset = () => {
        this.setState({count: 0});
    }

    render() {
        return(
        <>
        <div className="space-y-4 pt-12"></div>
        <h1 className="text-center">Count is {this.state.count}</h1>
        <div className="text-center space-x-4">
        <button
        className="bg-black text-white py-2 px-4"
        onClick={this.incease}
        >
            increase
            </button>
            <button
            className="bg-red-500 text-white py-2 px-4"
            onClick={this.reset}
            >
            reset
            </button>
            </div>
        </>
    )
}

}

export default ClassComponentWithState;