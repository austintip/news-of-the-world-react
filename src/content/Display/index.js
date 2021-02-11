import React from 'react';



export const Display = props => {
    let content = props.content ? '' : 'Ruh-Roh! API or props fail!';
    // console.log(props.content.articles)
    // let title

    // if (props.content.length !== 0) {
console.log('this is for display', props.article)
    return (
        <div>
            <li key={props.i}>
                <a href={props.article.url} target="_blank">
                    <h2>
                        {props.article.title}
                    </h2>
                    <img className="newsImg" src={props.article.urlToImage} />
                </a>
                <br></br>
                <h5>
                    {props.article.author}
                </h5>
                <br></br>
                <p>
                    {props.article.publishedAt}
                </p>
            </li>

        </div>
    )
};
