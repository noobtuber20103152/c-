import React from 'react'
import Links from '../Emergency/Links'
import Yellow from '../Emergency/Yellow'

function Comments() {
    return (
        <>
            <div className="container">
                <h3>C++ Comments</h3>
                <p>Comments can be used to explain C++ code, and to make it more readable. It can also be used to prevent execution when testing alternative code. Comments can be singled-lined or multi-lined.</p>
                <div className="container bg-secondary py-3 rounded">
                    <h3 className='text-light'>Single-line Comments</h3>
                    <ul>
                        <li className='text-white my-0'>Single-line comments start with two forward slashes (//).</li>
                        <li className='text-white my-0'>Any text between // and the end of the line is ignored by the compiler (will not be executed).</li>
                        <li className="text-light my-0">This example uses a single-line comment before a line of code:</li>
                    </ul>
                    <Links link="https://www.w3schools.com/CPP/trycpp.asp?filename=demo_single_comment" />
                    <ul><li className="text-light my-2">This example uses a single-line comment at the end of a line of code:</li></ul>
                    <Links link="https://www.w3schools.com/CPP/trycpp.asp?filename=demo_single_comment_end" />
                </div>
                <div className="container bg-secondary py-3 my-2 rounded">
                    <h3 className='text-light'>C++ Multi-line Comments</h3>
                    <ul>
                        <li className='text-white my-0'>Multi-line comments start with /* and ends with */.</li>
                        <li className='text-white my-0'>Any text between /* and */ will be ignored by the compiler:</li>
                    </ul>
                    <Links link="https://www.w3schools.com/CPP/trycpp.asp?filename=demo_multi_comment" />
                </div>
                <Yellow text="It is up to you which you want to use. Normally, we use // for short comments, and /* */ for longer." />
            </div>
        </>
    )
}

export default Comments
