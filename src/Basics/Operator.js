import React from 'react'
import Links from '../Emergency/Links'

function Operator() {
    return (
        <>
            <div className="container">
                <h3 className='my-2'>C++ Operators</h3>
                <div className="container rounded bg-secondary my-1 py-3">
                    <ul>
                        <li className="py-0 my-0 text-light">Operators are used to perform operations on variables and values.</li>
                        <li className="py-0 my-0 text-light">In the example below, we use the + <strong>operator</strong> to add together two values:</li>
                    </ul>
                    <Links link="https://www.w3schools.com/CPP/trycpp.asp?filename=demo_oper" />
                    <p className='text-light my-2'>Although the + operator is often used to add together two values, like in the example above, it can also be used to add together a variable and a value, or a variable and another variable:</p>
                </div>
                <div className="container my-2 py-3 bg-secondary rounded">
                    <h4 className='text-light'>C++ divides the operators into the following groups:</h4>
                    <ul>
                        <li className="text-light">Arithmetic Operators</li>
                        <li className="text-light">Assignment Operators</li>
                        <li className="text-light">Comparison Operators</li>
                        <li className="text-light">Logical Operators</li>
                        <li className="text-light">Bitwise Operators</li>
                    </ul>
                </div>

                <div className="container my-2 py-3 bg-secondary rounded w-100">
                    <h3 className='text-light'>Arithmetic Operators</h3>
                    <p className="text-light">Arithmetic operators are used to perform common mathematical operations.</p>
                    <table class="table table-light px-0 rounded">
                        <thead>
                            <tr>
                                <th scope="col" style={{ textAlign: 'center' }}>Operator</th>
                                <th scope="col" style={{ textAlign: 'center' }}>Description</th>

                                <th scope="col" style={{ textAlign: 'center' }}>Links</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" style={{ textAlign: 'center' }}>+</th>
                                <td style={{ textAlign: 'center' }}>Adds together two values</td>
                                <td style={{ textAlign: 'center' }}><a href="https://www.w3schools.com/CPP/trycpp.asp?filename=demo_oper_add" target="_blank" className="btn btn-success">Try it</a></td>
                            </tr>
                            <tr>
                                <th scope="row" style={{ textAlign: 'center' }}>-</th>

                                <td style={{ textAlign: 'center' }}>Subtracts one value from another</td>

                                <td style={{ textAlign: 'center' }}><a href="  https://www.w3schools.com/CPP/trycpp.asp?filename=demo_oper_sub" target="_blank" className="btn btn-success">Try it</a></td>
                            </tr>
                            <tr>
                                <th scope="row" style={{ textAlign: 'center' }}>*</th>
                                <td style={{ textAlign: 'center' }}>Multiplies two values</td>
                                <td style={{ textAlign: 'center' }}><a href="https://www.w3schools.com/CPP/trycpp.asp?filename=demo_oper_mult" target="_blank" className="btn btn-success">Try it</a></td>
                            </tr>
                            <tr>
                                <th style={{ textAlign: 'center' }} scope="row">/</th>
                                <td style={{ textAlign: 'center' }}>Divides one value by another</td>
                                <td style={{ textAlign: 'center' }}><a href="https://www.w3schools.com/CPP/trycpp.asp?filename=demo_oper_div" target="_blank" className="btn btn-success">Try it</a></td>
                            </tr>
                            <tr>
                                <th style={{ textAlign: 'center' }} scope="row">%</th>
                                <td style={{ textAlign: 'center' }}>Returns the division remainder</td>
                                <td style={{ textAlign: 'center' }}><a href="https://www.w3schools.com/CPP/trycpp.asp?filename=demo_oper_mod" target="_blank" className="btn btn-success">Try it</a></td>
                            </tr>
                            <tr>
                                <th style={{ textAlign: 'center' }} scope="row">++</th>
                                <td style={{ textAlign: 'center' }}>Increases the value of a variable by 1</td>
                                <td style={{ textAlign: 'center' }}><a href="https://www.w3schools.com/CPP/trycpp.asp?filename=demo_oper_inc" target="_blank" className="btn btn-success">Try it</a></td>
                            </tr>
                            <tr>
                                <th style={{ textAlign: 'center' }} scope="row">--</th>
                                <td style={{ textAlign: 'center' }}>Decreases the value of a variable by 1</td>
                                <td style={{ textAlign: 'center' }}><a href="https://www.w3schools.com/CPP/trycpp.asp?filename=demo_oper_dec" target="_blank" className="btn btn-success">Try it</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Operator
