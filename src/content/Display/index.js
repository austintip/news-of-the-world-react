import React from 'react';



export const Display = props => {
    let content = props.content ? '' : 'Ruh-Roh! API or props fail!';
    console.log(props.content.articles)
    let title

    if (props.content.length != 0) {
        title = props.content.articles.map((article, i) => {
            return (<li key={i}>
                <a href={article.url} target="_blank">
                    <h2>
                        {article.title}
                    </h2>
                    <img className="newsImg" src={article.urlToImage} />
                </a>
                <br></br>
                <h5>
                    {article.author}
                </h5>
                <br></br>
                <p>
                    {article.publishedAt}
                </p>
            </li>)
        })
    }

    return (
        <div>
            {content}
            <p>{title}</p>
        </div>
    )
};