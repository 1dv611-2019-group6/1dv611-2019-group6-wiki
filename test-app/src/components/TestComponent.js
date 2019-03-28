import React from 'react'

const TestComponent = (props) => {
    return (
        <>
            {' '}
            {/* Short for "React.Fragment". Instead of using div's everywhere, one can use React.Fragment.
            It helps with debugging since it doesn't clutter the DOM as much.*/}
            <h3>{props.text}</h3>
        </>
    )
}

export default TestComponent
