import React from 'react'

function Intro() {
    return (
        <>
            <div className="container my-3">
                <h3 className='my-2'>C++ Introduction</h3>
                <div className="container bg-secondary py-3 my-2 rounded">
                    <h3 className='text-light'>What is C++?</h3>
                    <ul>
                        <li className='text-light'>C++ is a cross-platform language that can be used to create high-performance applications.</li>
                        <li className='text-light'>C++ was developed by Bjarne Stroustrup, as an extension to the C language.</li>
                        <li className='text-light'>C++ gives programmers a high level of control over system resources and memory.</li>
                        <li className='text-light'>The language was updated 3 major times in 2011, 2014, and 2017 to C++11, C++14, and C++17.</li>
                    </ul>
                </div>
                <div className="container bg-secondary py-3 my-2 rounded">
                    <h3 className='text-light'>Why Use C++?</h3>
                    <ul>
                        <li className='text-light'>C++ is one of the world's most popular programming languages.</li>
                        <li className='text-light'>C++ can be found in today's operating systems, Graphical User Interfaces, and embedded systems.</li>
                        <li className='text-light'>C++ is an object-oriented programming language which gives a clear structure to programs and allows code to be reused, lowering development costs.</li>
                        <li className='text-light'>C++ is portable and can be used to develop applications that can be adapted to multiple platforms.</li>
                        <li className='text-light'>C++ is fun and easy to learn!</li>
                        <li className='text-light'>As C++ is close to C# and Java, it makes it easy for programmers to switch to C++ or vice versa</li>
                    </ul>
                </div>
                <div className="container bg-secondary py-3 my-2 rounded">
                    <h3 className='text-light'>Get Started</h3>
                    <ul>
                        <li className='text-light'>This tutorial will teach you the basics of C++.</li>
                        <li className='text-light'>It is not necessary to have any prior programming experience.</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Intro
