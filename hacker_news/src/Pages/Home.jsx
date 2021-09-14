import React, { useState } from 'react'
import Items from '../components/Items'
import { context } from '../util/content'

// const News = () => {
//     hits.map()
// }


const Home = () => {
    return (
        <main>
            <form>
            <h2>Search Hacker News</h2>
            <input type='text' className='form-input' value='React'></input>
            </form>

            <div>
                <button>{'🢀'}</button>
                <p>{}"min" of {}"max"</p>
                <button>{'🢂'}</button>
            </div>
            <section className='stories'>
                <Items />
            </section>

        </main>
    )
}

export default Home
