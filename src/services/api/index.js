const Api = (base_url) => {

    async function request (endpoint, options){
        return fetch(endpoint, {
                ...options
            })
            .then((response) => {
                if(!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json()
            })
            .then((data) => data)
            .catch((error)=>{
                throw error
            })
        
    }
    
    return {
        trigger: ({endpoint, options}) => {
            const passedOptions = options ? options : {}
            const target = endpoint.replace(/^\/+/g, '')
            return request(`${base_url}/${target}`, passedOptions)
        },
    }
    
}

export default Api;