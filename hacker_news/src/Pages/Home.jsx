import React, { useState } from 'react'
import Items from '../components/Items'
import { useAppContext } from '../util/content'

// const News = () => {
//     hits.map()
// }

const SearchForm = () => {
    const {query, handleSearch} = useAppContext();
    return<form className='seach-form' onSubmit={(e)=> e.preventDefault()}>

        <input type='text' className='form-input' value={query} onChange={(e) =>handleSearch(e.target.value)} />

    </form>
}

const Buttons = () =>{
    const {loading, page, nbPages, handlePage} = useAppContext()
    return <div>
    <button disabled={loading} className='arrow-btn' onClick={()=> handlePage('dev')}>{'🢀'}</button>
    <p className='page-num'>{page + 1} of {nbPages}</p>
    <button disabled={loading} className='arrow-btn' onClick={()=> handlePage('inc')}>{'🢂'}</button>
</div>
}


const Home = () => {
    return (
        <main>
            <form className='news'>
            <h2 className='news-title'>Search Hacker News</h2>
            <SearchForm />
            </form>

            <div>
                <Buttons />
            </div>
            <section className='stories'>
                <Items />
            </section>

        </main>
    )
}

export default Home
