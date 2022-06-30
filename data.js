const getDataAsync = async () => {
    const response = await fetch('https://jsonplaceholder.ir/users')
    const data = await response.json()
    return data
}

const getLocalData = (key) => { 
    const dataString = localStorage.getItem(key)
    if(!dataString) return false
    return JSON.parse(dataString)
}

const setLocalData = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}

const getUsers = async () => {
    const key = "users"
    if (!getLocalData(key)) {
        console.log("server");
        const data = await getDataAsync()
        setLocalData(key,data)
        return data
    } 
    console.log("local");
    return getLocalData(key)
}