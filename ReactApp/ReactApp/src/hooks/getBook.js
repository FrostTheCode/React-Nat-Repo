import { useCallback } from "react";
import { useQuery, useQueryClient } from "react-query";

const GET_BOOKS='GET_BOOKS';

export default function getBook({_id,url}){
    async function fechbooks(){
        const res=await fetch(url+"api/libros/"+_id);
        const json = await res.json();
        return json;
    }
    return useQuery([GET_BOOKS, _id], fechbooks);
}

export function useInvalidateBook({_id}){
    const queryClient = useQueryClient();
    const invalidateBookCache = useCallback(function(){
        queryClient.invalidateQueries([GET_BOOKS, _id]);
    }, [_id])
    return invalidateBookCache;
}