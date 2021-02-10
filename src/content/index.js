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
    const [searchResults, setSearchResults] = useState([]);
    const [query, setQuery] = useState('');
    // console.log(process.env)
    var url = `http://newsapi.org/v2/top-headlines?`+`country=us&`+`apiKey=${process.env.REACT_APP_API_KEY}`

    //make axios call
    useEffect(() => {
        axios.get(url)
            .then(res => {
                setContent(res.data)
            })
    }, [])

    const dynamicSearch = e => {
        setQuery(e.target.value);
        // let filtered = content.filter(content => {
        //     return content.
        // })
    }


    return (
        // Router for setting routes
        <Router>
            <div className='app'>
                <Landing search={dynamicSearch}/>
                <Display content={content}/>
            </div>
        </Router>
    )
}