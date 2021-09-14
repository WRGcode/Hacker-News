import React, { useState } from 'react'
import Items from '../components/Items'

const Home = () => {
    return (
        <main>
            <form>
            <h2>Search Hacker News</h2>
            <input type='text' className='form-input' value='React'></input>
            </form>

            <div>
                <button>{'<='}</button>
                <p>"page number of max page"</p>
                <button>{'=>'}</button>
            </div>
            <section>
                <Items />
            </section>

        </main>
    )
}

export default Home
