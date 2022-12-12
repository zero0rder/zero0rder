import { useState, useEffect } from 'react'
import { fetchData } from '../utils/http/index'

export function useFetch<T>(url: string){
    const [data, setData] = useState<T | null>(null)

    useEffect(() => {
        const controller = new AbortController()
        const getData = fetchData(url, controller.signal)
        const unPkg = (async () => {
            const res = await getData
            setData(() => res)
        })
        
        unPkg()
        return () => controller?.abort()
        
    }, [url])

    return data 
}