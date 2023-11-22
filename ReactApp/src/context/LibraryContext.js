import React,{useCallback, useMemo, createContext} from "react";
import { useQuery, queryCache } from "react-query";

const LibraryContext = createContext();

export default LibraryContext;

const GET_BOOKS = 'GET_BOOKS';

const url = 'http://172.16.111.57:3000/'


async function fetchBooks(){
    const res = await fetch(url+'api/libros/',{
        method: 'GET',
        headers:{
            "Content-Type": "application/json"
        }
    });
    const json = await res.json();
    return json
}

export function LibraryContextProvider ({children}){
    const {isSuccess, isLoading, data, error}=useQuery(GET_BOOKS, fetchBooks);

    const invalidateBookListCahe= useCallback(function(){
        queryCache.invalidateQueries(GET_BOOKS)
    },[])

    const value = useMemo(
        ()=>({
            isSuccess, 
            isLoading, 
            error, 
            data, 
            invalidateBookListCahe, 
            url
        }),
        [isSuccess, isLoading, error, data, invalidateBookListCahe, url]
    )
    return(
        <LibraryContext.Provider value={value}>{children}</LibraryContext.Provider>
    )
};