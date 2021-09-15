import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { useAppContext } from '../util/content'

const Items = () => {

    const { isLoading, hits, removeStory} = useAppContext()

    if (isLoading) {
        return <div className='isloading'><div className='spinner' /></div>
    }
    return (
        hits.map((item) =>{
            const { objectID, title, num_comments, url, points, author } = item
            return (
                <article key={objectID} className='story'>
            <h4 className='article-title'>{title}</h4>
            <p className='info'>{points} points by<span className='info'> {author}</span> | {num_comments} comments</p>
            <div>
                <a href={url} target='_blank' rel='noopener noreferrer' className='read-link'>readMore</a>
                <button className='remove-btn' onClick={() => removeStory(objectID)}>remove</button>
            </div>

        </article>
            )
        })
    )
}


export default Items
