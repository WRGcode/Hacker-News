import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { useAppContext } from '../util/content'

const Items = () => {

    const { isLoading, hits, removeStory} = useAppContext()

    if (isLoading) {
        return <div className='isloading'></div>
    }
    return (
        hits.map((item) =>{
            const { objectID, title, num_comments, url, points, author } = item
            return (
                <article key={objectID} className='story'>
            <h4 className='title'>{title}</h4>
            <p className='info'>{points} points by<span> {author} |</span> {num_comments} comments</p>
            <div>
                <a href={url} className='read-link'>readMore</a>
                <button onChange={removeStory} className='remove-btn'>remove</button>
            </div>

        </article>
            )
        })
    )
}


export default Items
