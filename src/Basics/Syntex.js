import React from 'react'
import Links from '../Emergency/Links'


function Syntex() {
    let cout =`{ cout << "Hello World! "; return 0; }`;
    return (
        <>
            <div className="container">
                <h3>C++ Syntex</h3>
                <p>Let's break up the following code to understand it better:</p>
                <Links link="https://www.w3schools.com/CPP/trycpp.asp?filename=demo_helloworld" />
                <div className="container bg-secondary my-2 py-3 rounded">
                    <h3 className='text-light my-1'>Example Explained</h3>
                    <ul>
                        <li className="text-light my-1">
                            <strong>Line 1: </strong>
                            "#include &#60;iostream&#62;"  is a header file library that lets us work with input and output objects, such as cout (used in line 5). Header files add functionality to C++ programs.
                        </li>
                        <li className="text-light my-1">
                            <strong>Line 2: </strong>
                            "using namespace std" means that we can use names for objects and variables from the standard library.
                        </li>
                    </ul>
                    <div className="container-fluid mx-0 py-2 mb-2 rounded" style={{ backgroundColor: "#ffffcc" }}>
                        <p className='py-0 my-0'>Don't worry if you don't understand how "#include &#60;iostream&#62;"  and using namespace std works. Just think of it as something that (almost) always appears in your program.</p>
                    </div>
                    <ul>
                        <li className="text-light my-1">
                            <strong>Line 3: </strong>
                            A blank line. C++ ignores white space. But we use it to make the code more readable.
                        </li>
                        <li className="text-light my-1">
                            <strong>Line 4: </strong>
                            Another thing that always appear in a C++ program, is int main( ). This is called a function. Any code inside its curly brackets &#123; &#125; will be executed.
                        </li>
                        <li className="text-light my-1">
                            <strong>Line 5: </strong>
                            cout (pronounced "see-out") is an object used together with the insertion operator (&#60;&#60;) to output/print text. In our example it will output "Hello World".
                        </li>
                        <li className="text-light my-1">
                            <strong>Note:</strong> Every C++ statement ends with a semicolon ;.
                        </li>
                        <li className="text-light my-1">
                            <strong>Note: </strong>
                            Note: The body of int main() could also been written as:
                            int main () {cout}
                        </li>
                        <li className="text-light my-1">
                            <strong>Remember: </strong>
                            The compiler ignores white spaces. However, multiple lines makes the code more readable.
                        </li>
                        <li className="text-light my-1">
                            <strong>Line 6: </strong>
                            Line 6: return 0 ends the main function.
                        </li>
                        <li className="text-light my-1">
                            <strong>Line 7: </strong>
                            Do not forget to add the closing curly bracket &#125; to actually end the main function.
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Syntex
