import { useState, useEffect } from 'react'
import { fetchData } from '../utils/http/index'

export const useFetch = (url) => {
    const [data, setData] = useState(null)

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