import React, { useState, useEffect } from 'react'

const TestComponent = (props) => {
    /*
      useState replaces the need for the use of this.state . If one
      writes arrow functions, no 'this' are needed.
    */
    const [number, setNumber] = useState(0)

    const increaseNumber = () => {
        setNumber(number + 1)
    }

    const decreaseNumber = () => {
        setNumber(number - 1)
    }

    // useEffect example
    // A time that increase the numbe by 1 every second
    useEffect(
        () => {
            // A timer that runs the increaseNumber function
            const timerID = setInterval(() => {
                increaseNumber()
            }, 1000)

            // The returned value in a useEffect is a function where you do
            // all the cleanup of example timers, eventListeners, socket connections etc.
            return function cleanup() {
                clearInterval(timerID)
            }
        } // Here you can specify on what arguments that the component should listen to changes on.
        // An example would be to a value of the window.size, maybe you want to hide a component when the screen gets too small
        // If you'd listen for height and a width variable, you'd write [height, width] here.
    )

    return (
        <>
            {' '}
            {/* Short for "React.Fragment". Instead of using div's everywhere, one can use React.Fragment.
            It helps with debugging since it doesn't clutter the DOM as much.*/}
            <h3>
                {props.text} | {number}
            </h3>
            <button onClick={increaseNumber}>Increase</button>
            <button onClick={decreaseNumber}>Decrease</button>
        </>
    )
}

export default TestComponent
