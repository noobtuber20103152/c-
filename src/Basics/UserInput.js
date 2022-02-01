import React from 'react'
import Links from '../Emergency/Links'
import Yellow from '../Emergency/Yellow'

function UserInput() {
    return (
        <>
            <div className="container my-2">
                <h3 className="my-2">C++ user Input</h3>
                <div className="container bg-secondary my-2 py-3 rounded">
                    <ul>
                        <li className="text-light">You have already learned that cout is used to output (print) values. Now we will use cin to get user input.</li>
                        <li className="text-light">cin is a predefined variable that reads data from the keyboard with the extraction operator (&#62;&#62;).</li>
                        <li className="text-light">
                            In the following example, the user can input a number, which is stored in the variable x. Then we print the value of x:
                        </li>
                    </ul>
                    <Links link="https://www.w3schools.com/CPP/showcpp.asp?filename=demo_user_input" />
                </div>
                <div className="container-fluid mx-0 py-2 mb-2 rounded" style={{ backgroundColor: "#ffffcc" }}>
                    <h4>Good to know</h4>
                    <ul>
                        <li>cout is pronounced "see-out". Used for output, and uses the insertion operator (&#60;&#60;)</li>
                        <li>cin is pronounced "see-in". Used for input, and uses the extraction operator (&#62;&#62;)</li>
                    </ul>
                </div>
                <div className="container bg-secondary my-1 py-3 rounded">
                    <h3 className='text-light'>Create a simple calculator</h3>
                    <p className='text-light'>In this example, the user must input two numbers. Then we print the sum by calculating (adding) the two numbers:</p>
                    <Links link="https://www.w3schools.com/CPP/showcpp.asp?filename=demo_user_input2"/>
                </div>
            </div>
        </>
    )
}

export default UserInput
