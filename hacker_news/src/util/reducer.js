export const reducer = (state, action ) => {
    switch(action.type) {
        case "SET_LOADING": {
            return {...state, loading: true}
        }
        case "SET_HITS": {
            return{
                ...state,
                loading: false,
                // page: 0,
                nbpages: action.payload.nbpages,
                 //data.nbpages
                hits: action.payload.hits,
            }
        }

        case "HANDLE_SEARCH" :
            return {...state, query: action.payload, page: 0}

        case "REMOVE_STORY": {
            const newHits= state.hits.filter((hit) => hit.objectID !== action.payload);
                return {
                    ...state,
                    hits: newHits
                }
            }
        }
    }
