import React from 'react'
import Links from '../Emergency/Links'

function GetStarted() {
    return (
        <>
            <div className="container my-3">
                <h3 className='my-2'>C++ Getting Started</h3>
                <div className="container bg-secondary my-2 py-3 rounded">
                    <h3 className='text-light'>C++ Get Started</h3>
                    <p className="my-1 text-light">To start using c++, you need two things</p>
                    <ul>
                        <li className='text-light'>A text editor, like <a style={{ textDecoration: 'none' }} href="https://code.visualstudio.com/" target="_blank">Vs Code</a>, to write C++ code</li>
                        <li className='text-light'>A compiler, like GCC, to translate the C++ code into a language that the computer will understand</li>
                    </ul>
                    <p className="my-1 text-light">There are many text editors and compilers to choose from.</p>
                </div>
                <div className="container bg-secondary my-3 py-2 rounded">
                    <h3 className='text-light'>C++ Install IDE</h3>
                    <p className='text-light'>An IDE (Integrated Development Environment) is used to edit AND compile the code.</p>
                    <p className='text-light'>Popular IDE's include Code::Blocks, Eclipse, and Visual Studio. These are all free, and they can be used to both edit and debug C++ code.</p>
                    <p className='text-light'>We will use <a style={{ textDecoration: 'none', color: '' }} href="https://code.visualstudio.com/" target="_blank">Vs Code</a>  in our tutorial, which we believe is a good place to start.</p>
                </div>
                <div className="container bg-secondary my-3 py-2 rounded">
                    <h3 className="text-light">Quick Started</h3>
                    <p className="text-light">Let's create our first C++ file.</p>
                    <p className='text-light'>Open vs code and create a file which name is myfirstprogram.c++</p>
                    <p className="text-light">Install code runner extension in vs code. If you have any issue you can go through this video <a href="https://www.youtube.com/watch?v=OurHFnwWAps" target="_blank">Code Runner</a></p>
                    <p className='text-light'>Write the following C++ code and save the file as myfirstprogram.cpp Save the file using ctrl+s key</p>
                    <Links link = "https://www.w3schools.com/CPP/trycpp.asp?filename=demo_helloworld"/>
                </div>
            </div>

        </>
    )
}

export default GetStarted
