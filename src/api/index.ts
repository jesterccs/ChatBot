
    export const Test = async (obj: any)=> {
        const url = 'http://localhost:5000/chat'
        const postData = {
            sender: obj.sender,
            message: obj.message,
            language: obj.language,
            button: obj.button
        }
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(postData)
        })
        // console.log(response.json())
        return await response.json()
    }

