import React from 'react'

function Variable() {
    return (
        <>
            <div className="container my-3">
                <h3>C++ Variables</h3>
                <div className="container bg-secondary py-3 rounded">
                    <p className="text-light">Variables are containers for storing data values.</p>
                    <p className="text-light">In C++, there are different types of variables (defined with different keywords), for example:</p>
                    <ul>
                        <li className="text-light"><strong>int</strong> - stores integers (whole numbers), without decimals, such as 123 or -123</li>
                        <li className="text-light"><strong>double</strong> - stores floating point numbers, with decimals, such as 19.99 or -19.99</li>
                        <li className="text-light"><strong>char</strong> - stores single characters, such as 'a' or 'B'. Char values are surrounded by single quotes</li>
                        <li className="text-light"><strong>string</strong> - stores text, such as "Hello World". String values are surrounded by double quotes</li>
                        <li className="text-light"><strong>bool</strong> - stores values with two states: true or false</li>
                    </ul>
                </div>
                <div className="container bg-secondary my-2 py-3 rounded">
                    <h3 className='text-light'>Declaring (Creating) Variables</h3>
                    <p className='text-light'>To create a variable, specify the type and assign it a value:</p>
                    <h4 className='text-light'>Syntex</h4>
                    <div class="card" style={{ width: '100%' }}>
                        <div class="card-body">
                            <strong> type variableName = value;</strong>
                        </div>
                    </div>
                    <p className="text-light my-2">
                        Where type is one of C++ types (such as int), and variableName is the name of the variable (such as x or myName). The equal sign is used to assign values to the variable.
                    </p>
                    <p className="text-light">
                        To create a variable that should store a number, look at the following example:
                    </p>
                    <h4 className="text-light my-1">Example</h4>
                    <p className="text-light">Create a variable called <strong> myNum</strong> of type int and assign it the value <strong>15</strong>:</p>
                    <p className="text-light my-2">
                        <div class="card" style={{ width: '100%' }}>
                            <div class="card-body">
                                <strong className='text-dark'>int myNum = 15</strong>
                                <br />
                                <strong className="text-dark">cout &#60;&#60;myNum;</strong>
                                <br />
                                <a href="https://www.w3schools.com/CPP/trycpp.asp?filename=demo_variables_int" target="_blank" class="btn btn-success stretched-link mt-3">Try code yourself</a>
                            </div>

                        </div>
                    </p>
                    <p className="text-light">You can also declare a variable without assigning the value, and assign the value later:</p>
                    <p className="text-light my-2">
                        <div class="card" style={{ width: '100%' }}>
                            <div class="card-body">
                                <strong className='text-dark'> int myNum;</strong>
                                <br />
                                <strong className='text-dark'>myNum = 15;</strong>
                                <br />
                                <strong className="text-dark">cout &#60;&#60;myNum;</strong>
                                <br />
                                <a href="https://www.w3schools.com/CPP/trycpp.asp?filename=demo_variables_int2" target="_blank" class="btn btn-success stretched-link mt-3">Try code yourself</a>
                            </div>
                        </div>
                    </p>
                    <p className="text-light">Note that if you assign a new value to an existing variable, it will overwrite the previous value:</p>
                    <p className="text-light my-2">
                        <div class="card" style={{ width: '100%' }}>
                            <div class="card-body">
                                <strong className='text-dark'>  int myNum = 15;  // myNum is 15</strong>
                                <br />
                                <strong className='text-dark'>myNum = 10;  // Now myNum is 10</strong>
                                <br />
                                <strong className="text-dark">cout &#60;&#60;myNum; // Outputs 10</strong>
                                <br />
                                <a href="https://www.w3schools.com/CPP/trycpp.asp?filename=demo_variables_int3" target="_blank" class="btn btn-success stretched-link mt-3">Try code yourself</a>
                            </div>
                        </div>
                    </p>
                </div>
                <div className="container bg-secondary my-2 py-3 rounded">
                    <h3 className="text-light">Other Types</h3>
                    <p className="text-light">A demonstration of other data types:</p>
                    <div class="card" style={{ width: '100%' }}>
                        <div class="card-body">
                            <strong className='text-dark'>
                                int myNum = 5;               // Integer (whole number without decimals) <br />
                                double myFloatNum = 5.99;    // Floating point number (with decimals) <br />
                                char myLetter = 'D';         // Character <br />
                                string myText = "Hello";     // String (text) <br />
                                bool myBoolean = true;       // Boolean (true or false)
                            </strong>
                        </div>
                    </div>
                </div>

                <div className="container bg-secondary my-2 py-3 rounded">
                    <h3 className='text-light'>Display Variables</h3>
                    <p className='text-light'>The <strong>cout</strong> object is used together with the <strong>&#60;&#60;</strong> operator to display variables.</p>
                    <p className='text-light'>To combine both text and a variable, separate them with the <strong>&#60;&#60;</strong>operator:</p>
                    <div class="card" style={{ width: '100%' }}>
                        <div class="card-body">
                            <strong>
                                int myAge = 35; <br />cout &#60;&#60; "I am " &#60;&#60; myAge &#60;&#60; " years old.";
                            </strong>
                            <br />
                            <a href="https://www.w3schools.com/CPP/trycpp.asp?filename=demo_variables_display" target="_blank" class="btn btn-success stretched-link mt-3">Try code yourself</a>
                        </div>
                    </div>
                </div>
                <div className="container bg-secondary my-2 py-3 rounded">
                    <h3 className='text-light'>Add Variables Together</h3>
                    <p className='text-light'>To add a variable to another variable, you can use the + operator:</p>
                    <div class="card" style={{ width: '100%' }}>
                        <div class="card-body">
                            <strong>
                                int x = 5; <br />
                                int y = 6;<br />
                                int sum = x + y;<br />
                                cout &#60;&#60; sum;
                            </strong>
                            <br />
                            <a href="https://www.w3schools.com/CPP/trycpp.asp?filename=demo_variables_add" target="_blank" class="btn btn-success stretched-link mt-3">Try code yourself</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Variable
