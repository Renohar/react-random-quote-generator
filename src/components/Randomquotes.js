import React from 'react'



const Randomquotes = ({quote, author, onNewQuote , color}) => {

    const tweetText = `"${quote}" - ${author}`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;

    return (
        <div id="quote-box">
            <div className="quote-box-inner" style={{ backgroundColor: "#fff" }}>
            <div className="displayquote">
                <p  id="text">"{quote}"</p>
                <p id="author">-{author}</p>
            </div>

            <div className="share-and-reload">
                <a style={{ backgroundColor: color, color: "#fff" }} href={twitterUrl} target="_blank" id="new-quote" rel="noreferrer">Share in Twitter</a>
                 <button style={{ backgroundColor: color, color: "#fff" }}  onClick={onNewQuote} id="tweet-quote">New Quote</button> 
            </div>
            </div>

        </div>
    )
}



export default Randomquotes
