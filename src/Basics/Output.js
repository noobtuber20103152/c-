import React from 'react'
import Links from '../Emergency/Links'

function Output() {
    return (
        <>
            <div className="container">
                <h2>C++ Output(Print Text)</h2>
                <p>The cout object, together with the &#60;&#60; operator, is used to output values/print text:</p>
                <div className="container rounded bg-success py-1 my-1 px-1">
                    <Links link="https://www.w3schools.com/CPP/trycpp.asp?filename=demo_output" />
                </div>
                <p>You can add as many cout objects as you want. However, note that it does not insert a new line at the end of the output:</p>
                <div className="container rounded bg-success py-1 my-1 px-1">
                    <Links link="https://www.w3schools.com/CPP/trycpp.asp?filename=demo_output2" />
                </div>
            </div>
            <div className="container">
                <h2>New Lines</h2>
                <p>To insert a new line, you can use the \n character:</p>
                <div className="container rounded bg-success py-1 my-1 px-1">
                    <Links link="https://www.w3schools.com/CPP/trycpp.asp?filename=demo_output3" />
                </div>
                <p>Tip: Two \n characters after each other will create a blank line:</p>
                <div className="container rounded bg-success py-1 my-1 px-1">
                    <Links link="https://www.w3schools.com/CPP/trycpp.asp?filename=demo_output4" />
                </div>
                <p>Another way to insert a new line, is with the endl manipulator:</p>
                <div className="container rounded bg-success py-1 my-1 px-1">
                    <Links link="https://www.w3schools.com/CPP/trycpp.asp?filename=demo_output5" />
                </div>
                
            </div>
            <div className="container  py-2 mt-2 mb-5 mb-2" style={{ backgroundColor: "#ffffcc" }}>
                <p className='py-0 my-0'>Both \n and endl are used to break lines. However, \n is used more often and is the preferred way.</p>
            </div>
        </>
    )
}

export default Output
