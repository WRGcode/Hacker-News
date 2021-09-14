import React, { useEffect, useReducer, useContext } from 'react';
import { reducer } from './reducer'

const API_ENDPOINT = `http://hn.algolia.com/api/v1/search?`;

//state object that holds the values for the context
//this is used by reducer
const initialState = {
    hits: [],
    page: 0,
    query: 'React',
    nbpages: 0,
    loading: true,
}

const AppContext = React.createContext()

export const AppProvider = ({children}) =>{
const [state, dispatch] = useReducer(reducer, initialState)

const fetchHits = async (url) =>{
    //sets loading to true
    dispatch({type: 'SET_LOADING'});
    try {
const response = await fetch(url)
const data = await response.json()
dispatch({type: "SET_HITS", payload: data})
    }catch (error) {
        console.error(error)
    }
}

const removeStory =(id) =>{
    dispatch({type: "REMOVE_STORY", payload: id})
}

useEffect(() => {
    fetchHits(`${API_ENDPOINT}query=${state.query}&page=${state.page}&`)
    },[state.query, state.page])



return <AppContext.Provider value={{...state, removeStory}}>
    {children}
</AppContext.Provider>
}

export const useAppContext = () => {
    return useContext(AppContext);
}