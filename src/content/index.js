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
    var url = `http://newsapi.org/v2/top-headlines?` + `country=us&` + `apiKey=${process.env.REACT_APP_API_KEY}`
    let title
    //make axios call
    useEffect(() => {
        axios.get(url)
            .then(res => {
                setContent(Object.values(res.data))
            })
    }, [])


    // let list = searchResults.map((article, i) => {
    //     return (
    //         <Display
    //         key={i}
    //         content={article}
    //         />
    //     )
    // })
    console.log(content)

    const dynamicSearch = e => {
        setQuery(e.target.value);
        
        let filtered = content[2].filter(article => {
            return article.title.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setSearchResults(filtered)
    }

    if (content.length != 0) {
        title = searchResults.map((article, i) => {
            return (
                <Display
                key={i}
                article={article}
                />
            )
        })
    }

    return (
        // Router for setting routes
        <Router>
            <div className='app'>
                <Landing search={dynamicSearch} />
                {/* <Display content={content} />*/}
                {title}
                {/* {list} */}
            </div>
        </Router>
    )
}