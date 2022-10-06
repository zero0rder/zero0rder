export async function fetchData(url, signal){
    const response = await fetch(url, { method: 'GET', signal: signal }).then(res => {
        if(res.ok)
            return res.json()
        
        throw res
    
    }).then(data => data).catch(err => {
        console.error('error in api', err)
    })

    return  response
}