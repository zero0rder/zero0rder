export async function fetchData(url: string, signal: AbortSignal | null){
    const response = await fetch(url, { method: 'GET', signal: signal }).then(res => {
        if(res.ok)
            return res.json()
        
        throw res
    
    }).then(data => data).catch(err => {
        console.error('error in api', err)
    })

    return  response
}

// function whiteListedRepos(data: RepositoryProps[] | null): RepositoryProps[] | null {
//     const ids = [420233228,95272766,313418879,461664367,497177915,532011755,476546797,472494688]
//     data?.filter(r => ids.includes(r.id))
//     return data
// }