import React from 'react';
import './About.css';

export const About = () => {
    return (
        <div className='about-container'>
            <div className='overlay-up'></div>
            <div className='about-info'>
                <div className='info-section'>
                    <h1>About Me</h1>
                    <p>The nice thing about a whiteboard is that in some ways, you can focus on the big picture. You don't have a
                        compiler. so you don't need to make your code compile. You don't need to write the entire class definition
                        and boilerplate code. You get to focus on the interesting, "meaty" parts of the code: the function that the
                        question is really all about. 
                    </p>
                    <p>
                    There are some broad differences across companies. Some companies focus on algorithms (often with some
                    system design worked in), and others really like knowledge-based questions. But within a given category
                    of question, there is little that makes it "belong" to one company instead of another. A Google algorithm
                    question is essentially the same as a Facebook algorithm question. 
                    </p>
                </div>
            </div>
            <div className='overlay-bottom'></div>
        </div>
    )
}
