import React from 'react';

export const Landing = props => {
    console.log(props.search)
    return (
        <div>
            <h1>Searchbar goes here!</h1>
            <input
            placeholder="Search for Articles"
            onChange={props.search}>
            </input>
        </div>
    )
};