import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='question'>
            <h1>Question And Answer</h1>
            <section class="answerSection">
                <div class="card">
                    <h2>Question 1: How does react work?</h2>
                    <h3><span>Answer : </span> React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</h3>
                    <p>
                    </p>
                </div>
                <div class="card">
                    <h2>Question 2: Difference between props and state</h2>
                    <h3><span>Answer : </span> Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component.</h3>
                    <p></p>
                </div>
                <div class="card">
                    <h2>Question 3:  What is useEffect used for? (without fetching data)</h2>
                    <h3><span>Answer : </span>
                    The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional.</h3>
                    <p></p>
                </div>
            </section> 
        </div>
    );
};

export default Question;