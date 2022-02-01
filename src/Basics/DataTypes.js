import React from 'react'
import Links from '../Emergency/Links'

function DataTypes() {
    return (
        <>
            <div className="container my-1">
                <h3>C++ Data Types</h3>
                <div className="container my-1 py-3 bg-secondary  rounded">
                    <p className="text-light">As explained in the Variables chapter, a variable in C++ must be a specified data type:</p>
                    <Links link="https://www.w3schools.com/CPP/trycpp.asp?filename=demo_data_types" />
                </div>
                <div className="container bg-secondary my-2  rounded py-3">
                    <h3 className="text-light">Basic Data Types</h3>
                    <p className="text-light">The data type specifies the size and type of information the variable will store:</p>
                </div>
                <div className="container bg-light">
                    <table class="table table-light rounded">
                        <thead>
                            <tr>
                                <th scope="col">Data Type</th>
                                <th scope="col">Size</th>
                                <th scope="col">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>     
                                <td>int</td>
                                <td>4 bytes</td>
                                <td>Stores whole numbers, without decimals</td>
                            </tr>
                            <tr>    
                                <td>float</td>
                                <td>4 bytes</td>
                                <td>	Stores fractional numbers, containing one or more decimals. Sufficient for storing 7 decimal digits</td>
                            </tr>
                            <tr>
                                <td>double</td>
                                <td>8 bytes</td>
                                <td>Stores fractional numbers, containing one or more decimals. Sufficient for storing 15 decimal digits</td>
                            </tr>
                            <tr>
                                <td>boolean</td>
                                <td>1 bytes</td>
                                <td>Stores true or false values</td>
                            </tr>
                            <tr>
                                <td>char</td>
                                <td>1 bytes</td>
                                <td>Stores a single character/letter/number, or ASCII values</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="container rounded bg-secondary my-2 py-3">
                          <h3 className='text-light'>String Data Type</h3>
                          <p className="text-light">The string type is used to store a sequence of characters (text). This is not a built-in type, but it behaves like one in its most basic usage. String values must be surrounded by double quotes:</p>
                          <p className="text-light">To use strings, you must include an additional header file in the source code, the &#60;string&#62; library:</p>
                          <Links link="https://www.w3schools.com/CPP/trycpp.asp?filename=demo_strings"/>
                </div>
            </div>
        </>
    )
}

export default DataTypes
