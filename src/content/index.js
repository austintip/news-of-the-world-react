import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios'


import { Display } from './Display';
import { Landing } from './Landing';


import '../styling/style.css';

// export const is quicker but must be imported directly
// rather than as a default
// refer to index.js at src root to see how import works
export const App = () => {
    // set the states
    const [content, setContent] = useState([])
    // console.log(process.env)
    var url = `http://newsapi.org/v2/top-headlines?`+`country=us&`+`apiKey=${process.env.REACT_APP_API_KEY}`

    //make axios call
    useEffect(() => {
        axios.get(url)
            .then(res => {
                setContent(res.data)
            })
    }, [])

    // console.log(content)


    return (
        // Router for setting routes
        <Router>
            <div className='app'>
                <Landing />
                <Display content={content}/>
            </div>
        </Router>
    )
}