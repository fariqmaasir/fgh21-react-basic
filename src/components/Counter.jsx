import React from "react";

function Counter() {
    const [result, setResult] = React.useState(0)
    function decreaseNum() {
        if (result > 0) {
            setResult(result-1)     
        }
    }
    function increaseNum() {
        if (result < 10) {
            setResult(result + 1)
        }
    }
    return(
        <div className="container">
            <div>
                <button onClick={decreaseNum} type="button">-</button>
            </div>
            <div>{result}</div>   
            <div>
                <button onClick={increaseNum} type="button">+</button>
            </div>
        </div>
    )
}

export default Counter