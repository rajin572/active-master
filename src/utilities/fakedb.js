const addToDb = value =>{
    localStorage.setItem("break-time", JSON.stringify(value))
}
const showToWeb = () =>{
    let getItem = localStorage.getItem("break-time")
    if(getItem){
        getItem = JSON.parse(getItem)
    }
    return getItem
}
export {
    addToDb,
    showToWeb
}