function validate(obj, schema){
    let schemaKeys = Object.keys(schema).sort()
    let objectKeys = Object.keys(obj).sort()
    return JSON.stringify(objectKeys) === JSON.stringify(schemaKeys)
}

export function isGif(obj){
    let gifSchema = {
        id: 15,
        title: "",
        public_id: "",
        size: "",
        imageurl: "",
        created_on: ""
    }

    return validate(obj, gifSchema)
}

export function isArticle(obj){
    let articleSchema = {
        id: 12,
        title: "",
        body: "",
        created_on: ""
    }
    
    return validate(obj, articleSchema)
}